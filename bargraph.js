var barArray = [];
var sections = [];

var divContainer;
var divContainerHeight;
var divContainerWidth;
var barGraphDivHeight;
var barGraphDivWidth;
var barGraphLeftMargin;
var graphLabelDivHeight;
var graphLabelDivWidth;
var graphValuesDivHeight;
var graphValuesDivWidth;
var barGraphDiv;
var graphLabelDiv;
var graphValuesDiv;
var highestValue;

function drawBarChart(data, options, element) {
	createDivs(element);
	graph(data, options);
	labels(data, options);
	lines();
	innerValues(data, options, element);
	outerValues(data, options, element);
}

function createDivs(element) {

	divContainer = $(element);
	divContainerHeight = $(element).height();
	divContainerWidth = $(element).width();


	barGraphDivHeight = divContainerHeight * .9;
	barGraphDivWidth = divContainerWidth * .9;
	barGraphLeftMargin = divContainerWidth * .1;

	graphLabelDivHeight = barGraphDivHeight * .1;
	graphLabelDivWidth = divContainerWidth * .9;

	graphValuesDivHeight = divContainerHeight * .1;
	graphValuesDivWidth = divContainerWidth;

	barGraphDiv = $("<div id='bar-graph' style=" + "margin-left:" + barGraphLeftMargin + ";" + "height:" + barGraphDivHeight + ";" + "width:" + barGraphDivWidth + ";" + ">" + "</div>").appendTo(divContainer);

	graphLabelDiv = $("<div id='graph-label' style=" + "margin-left:" + barGraphLeftMargin + ";" + "height:" + graphLabelDivHeight + ";" + "width:" + graphLabelDivWidth + ";" + ">" + "</div>").appendTo(divContainer);

	graphValuesDiv = $("<div id='graph-values' style=" + "text-align:" + "right" + ";" + "height:" + graphValuesDivHeight + ";" + "width:" + graphValuesDivWidth + ";" + ">" + "</div>").appendTo(divContainer);
}

function graph(data, options, element) {

	var graphHtml = "";
	var barGraphWidth = $(barGraphDiv).width();
	var lineWidth = barGraphWidth + barGraphWidth / 10;
	var barGraphHeight = $(barGraphDiv).height();

	//Figures out the highest value and proportions according to graph size
	var valuesArray = [];
	for (u = 0; u < data.length; u++) {
		valuesArray.push(data[u].value);
	}
	highestValue = Math.max(...valuesArray);
	var barHeightModifier = (barGraphDivHeight * .9) / highestValue;

	//prepares section object which will be used in html string
	for (var i = 0; i < data.length; i++) {

		section = {
			divName: "barDiv" + i,
			variableName: data[i].name,
			variableValue: data[i].value,
			sectionHeight: data[i].value + (barGraphHeight / 4),
			color: randomColor(),
			barHeight: data[i].value * barHeightModifier,
			sectionWidth: (90 / data.length) - (5 / data.length) + "%",
			distance: (100 / data.length) * i + "%",
			distanceInt: ((100 / data.length) * i)
		}
		sections.push(section);
	}

	//creates html string
	for (var s = 0; s < sections.length; s++) {

		// section and bar
		graphHtml += "<div class='bar' style=" + "height:" + sections[s].barHeight + ";" + "background-color:" + sections[s].color + ";" + "bottom:" + ((divContainerHeight * .02)) + ";" + "width:" + sections[s].sectionWidth + ";" + "margin-left:" + sections[s].distance + ";" + "text-align:" + "center" + ";" + "></div>";
	}

	$(barGraphDiv).append(graphHtml);
}

function labels(data, options, element) {

	var labelsHtml = "";
	var labelDist = graphLabelDivWidth / sections.length;

	for (var s = 0; s < sections.length; s++) {

		labelsHtml += "<div class='barName' style=" + "bottom:" + graphLabelDivHeight + ";" + "margin-left:" + ((labelDist * s) + (labelDist / data.length)) + ";" + ">" + sections[s].variableName + "</div>";
	}

	$(graphLabelDiv).append(labelsHtml);
}

function lines() {
	
	var lineHtml = "";
	var midValLine = barGraphDivHeight / 2;
	

	//bottom line
	lineHtml += "<hr class='valueLine' style=" + "background:" + "grey" + ";" + "bottom:" + 0 + ";" + "size:" + "1px" + ";" + "height:" + "1" + ";" + "margin-left:" + "-15" + ";" + "width:" + (barGraphDivWidth + 15) + ";" + ">";

	//middle line
	lineHtml += "<hr class='valueLine' style=" + "background:" + "grey" + ";" + "bottom:" + midValLine + ";" + "size:" + "1px" + ";" + "height:" + "1" + ";" + "margin-left:" + "-15" + ";" + "width:" + (barGraphDivWidth + 15) + ";" + ">";

	//top line
	lineHtml += "<hr class='valueLine' style=" + "background:" + "grey" + ";" + "top:" + 0 + ";" + "size:" + "1px" + ";" + "height:" + "1" + ";" + "margin-left:" + "-15" + ";" + "width:" + (barGraphDivWidth + 15) + ";" + ">";

	$(barGraphDiv).append(lineHtml);
}

function innerValues(data, options, element) {

	var valuesHtml = "";
	var labelDist = graphLabelDivWidth / sections.length;
	for (var s = 0; s < sections.length; s++) {
		valuesHtml += "<div class='barValue' style=" + "bottom:" + (sections[s].barHeight + 10) + ";" + "margin-left:" + ((labelDist * s) + (labelDist / data.length)) + ";" + ">" + sections[s].variableValue + "</div>";
	}
	$(barGraphDiv).append(valuesHtml);
}

function outerValues(data, options, element) {

	//Values 
	var toptopValue = Math.ceil((highestValue * 1.1) / 10) * 10;

	var midValue = toptopValue / 2
	var midValPosition = divContainerHeight /2;
	
	var valuesHtml = "";
	
	valuesHtml += "<p style=" + "position:" + "absolute" + ";" + "top:" + 0 + ";" + ">" + toptopValue + "</p>";
	
	valuesHtml += "<p style=" + "position:" + "absolute" + ";" + "bottom:" + midValPosition + ";" + ">" + midValue + "</p>";
	
	valuesHtml += "<p style=" + "position:" + "absolute" + ";" + "bottom:" + (divContainerHeight * .05) + ";" + ">" + 0 + "</p>";
	
	$(graphValuesDiv).append(valuesHtml);
}

function randomColor() {
	var c = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	return c;
}

