

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


function drawBarChart(data, options, element) {

	createDivs(data, options, element);
	graph(data, options, element);
    labels(data,options,element);
	/*
	//create three divs (graph, values, labels)
	

	//create html strings to populate divs with

	var graphHtml = "";
	var valuesHtml = "";
	var labelsHtml = "";

	var barGraphWidth = $(barGraphDiv).width();
	var lineWidth = barGraphWidth + barGraphWidth / 10;
	var barGraphHeight = $(barGraphDiv).height();

	//Figures out the highest value and proportions according to graph size
	var valuesArray = [];
	for (u = 0; u < data.length; u++) {
		valuesArray.push(data[u].value);
	}
	var highestValue = Math.max(...valuesArray);
	var barHeightModifier = (barGraphDivHeight * .9) / highestValue;
	console.log(barHeightModifier);




	var toptopValue = Math.ceil((highestValue * 1.1) / 10) * 10;

	var midValue = toptopValue / 2

	var bottomValue = midValue / 2;

	var topValue = midValue + bottomValue;



	//setup sections and info
	for (var i = 0; i < data.length; i++) {

		section = {
			divName: "barDiv" + i,
			variableName: data[i].name,
			variableValue: data[i].value,
			sectionHeight: data[i].value + (barGraphHeight / 4),
			color: randomColor(),
			barHeight: data[i].value * barHeightModifier,
			sectionWidth: (90 / data.length) - (5 / data.length) + "%",
			distance: (100 / data.length) * i + "%"
		}
		sections.push(section);
	}


	var labelDist = barGraphDivWidth / sections.length;

	for (var s = 0; s < sections.length; s++) {

		// section and bar
		graphHtml += "<div class='bar' style=" + "height:" + sections[s].barHeight + ";" + "background-color:" + sections[s].color + ";" + "bottom:" + ((divContainerHeight * .02)) + ";" + "width:" + sections[s].sectionWidth + ";" + "margin-left:" + sections[s].distance + ";" + "text-align:" + "center" + ";" + "></div>";

		//Name

		labelsHtml += "<div class='barName' style=" + "bottom:" + ((divContainerHeight * .1) / 1.3) + ";" + "margin-left:" + ((labelDist * s) + (labelDist / data.length)) + ";" + ">" + sections[s].variableName + "</div>";

		//Value (this is in graph Html as it appears in graph)
		graphHtml += "<div class='barValue' style=" + "bottom:" + sections[s].barHeight + ";" + "margin-left:" + sections[s].distance + ";" + ">" + sections[s].variableValue + "</div>";

	}

	//value lines 
	var midValLine = barGraphHeight / 2;

	var bottomValLine = midValLine / 2;

	var topValLine = midValLine + bottomValLine;



	graphHtml += "<hr class='valueLine' style=" + "background:" + "grey" + ";" + "bottom:" + midValLine + ";" + "size:" + "1px" + ";" + "height:" + "1" + ";" + "margin-left:" + "-15" + ";" + "width:" + (barGraphDivWidth + 15) + ";" + ">";

	graphHtml += "<hr class='valueLine' style=" + "background:" + "grey" + ";" + "bottom:" + bottomValLine + ";" + "size:" + "1px" + ";" + "height:" + "1" + ";" + "margin-left:" + "-15" + ";" + "width:" + (barGraphDivWidth + 15) + ";" + ">";


	graphHtml += "<hr class='valueLine' style=" + "background:" + "grey" + ";" + "bottom:" + topValLine + ";" + "size:" + "1px" + ";" + "height:" + "1" + ";" + "margin-left:" + "-15" + ";" + "width:" + (barGraphDivWidth + 15) + ";" + ">";

	graphHtml += "<hr class='valueLine' style=" + "background:" + "grey" + ";" + "bottom:" + 0 + ";" + "size:" + "1px" + ";" + "height:" + "1" + ";" + "padding:" + "2" + ";" + "margin-left:" + "-15" + ";" + "width:" + (barGraphDivWidth + 15) + ";" + ">";

	graphHtml += "<hr class='valueLine' style=" + "background:" + "grey" + ";" + "size:" + "1px" + ";" + "height:" + "1" + ";" + "margin-left:" + "-15" + ";" + "width:" + (barGraphDivWidth + 15) + ";" + ">";

	//values


	//Top Top
	valuesHtml += "<p style=" + "position:" + "absolute" + ";" + "top:" + 0 + ";" + ">" + toptopValue + "</p>";



	//2nd Top
	valuesHtml += "<p style=" + "position:" + "absolute" + ";" + "bottom:" + (topValLine + (divContainerHeight * .075)) + ";" + ">" + topValue + "</p>";

	//mid
	valuesHtml += "<p style=" + "position:" + "absolute" + ";" + "bottom:" + (midValLine + (divContainerHeight * .075)) + ";" + ">" + midValue + "</p>";

	//bottom
	valuesHtml += "<p style=" + "position:" + "absolute" + ";" + "bottom:" + (bottomValLine + (divContainerHeight * .075)) + ";" + ">" + bottomValue + "</p>";

	//zero
	valuesHtml += "<p style=" + "position:" + "absolute" + ";" + "bottom:" + divContainerHeight * .075 + ";" + ">" + 0 + "</p>";

	//append everything
	$(barGraphDiv).append(graphHtml);
	$(graphLabelDiv).append(labelsHtml);
	$(graphValuesDiv).append(valuesHtml);
*/
}

function createDivs(data, options, element) {

	divContainer = $(element);
	divContainerHeight = $(element).height();
	divContainerWidth = $(element).width();


	barGraphDivHeight = divContainerHeight * .9;
	barGraphDivWidth = divContainerWidth * .9;
	barGraphLeftMargin = divContainerWidth * .1;

	graphLabelDivHeight = barGraphDivHeight;
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
	var highestValue = Math.max(...valuesArray);
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
			distance: (100 / data.length) * i + "%"
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
		
	labelsHtml += "<div class='barName' style=" + "bottom:" + ((divContainerHeight * .1) / 1.3) + ";" + "margin-left:" + ((labelDist * s) + (labelDist / data.length)) + ";" + ">" + sections[s].variableName + "</div>";
	}
	
	$(graphLabelDiv).append(labelsHtml);
}

function randomColor() {
	var c = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	return c;
}

function drawGraph() {
	drawBarChart(barArray, "none", "bar-graph");
}

function addBar() {

	var variableName = document.getElementById("variable-name").value;
	var variableValue = document.getElementById("variable-value").value;
	bar.name = variableName;
	bar.value = parseInt(variableValue);
	barArray.push(bar);
}

$(document).ready(function () {
	var bar1 = {
		name: 'cats',
		value: 50
	}
	var bar2 = {
		name: 'dogs',
		value: 25
	}
	var bar3 = {
		name: 'birds',
		value: 142
	}
	var bar4 = {
		name: 'snakes',
		value: 11
	}
	var bar4 = {
		name: 'monkeys',
		value: 210
	}
	var bar5 = {
		name: 'people',
		value: 29
	}
	barArray.push(bar1);
	barArray.push(bar2);
	barArray.push(bar3);
	barArray.push(bar4);
	barArray.push(bar5);

	drawBarChart(barArray, '', "#graph");
});
