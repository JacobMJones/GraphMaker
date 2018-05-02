var bar = {
	name: "",
	value: "",
}

var barArray = [];
var bar1;
var bar2;

var sections = [];

function drawBarChart(data, options, element) {



	//create three divs (graph, values, labels)
	var divContainer = $(element);
    var divContainerHeight = $(element).height();
	var divContainerWidth = $(element).width();
	
	
	var barGraphDivHeight = divContainerHeight *.9;
	var barGraphDivWidth = divContainerWidth *.9;
	var barGraphLeftMargin = divContainerWidth *.1;
	
	var graphLabelDivHeight = barGraphDivHeight;
	var graphLabelDivWidth = divContainerWidth *.1;

	var graphValuesDivHeight = divContainerHeight *.1;

	var graphValuesDivWidth = divContainerWidth;
	
	var barGraphDiv = $("<div id='bar-graph' style=" + "margin-left:" + barGraphLeftMargin + ";" + "height:" + barGraphDivHeight + ";" + "width:" + barGraphDivWidth + ";" + "background-color:" + "coral" + ";" + ">" + "</div>").appendTo(divContainer);
	
	var graphLabelDiv = $("<div id='graph-label' style=" + "margin-left:" + barGraphLeftMargin + ";" + "height:" + graphLabelDivHeight + ";" + "width:" + graphLabelDivWidth + ";" + "background-color:" + "green" + ";" + ">" + "</div>").appendTo(divContainer);



	var graphValuesDiv = $("<div id='graph-values' style=" + "height:" + graphValuesDivHeight + ";" + "width:" + graphValuesDivWidth +  ";" + ">" + "</div>").appendTo(divContainer);
	
	
	//create html strings to populate divs with
	
	var graphHtml = "";
	var valuesHtml = "";
	var labelsHtml = "";
	
	var barGraphWidth = $(barGraphDiv).width();
	var lineWidth = barGraphWidth + barGraphWidth / 10;
	var barGraphHeight = $(barGraphDiv).height();


	//setup sections and info
	for (var i = 0; i < data.length; i++) {

		section = {
			divName: "barDiv" + i,
			variableName: data[i].name,
			variableValue: data[i].value,
			sectionHeight: data[i].value + (barGraphHeight / 4),
			color: randomColor(),
			barHeight: data[i].value,
			sectionWidth:(90 / data.length) - (5 / data.length) + "%",
			distance: (100 / data.length) * i  + "%"
		}
		sections.push(section);
	}


	var labelDist = barGraphDivWidth /sections.length;
	for (var s = 0; s < sections.length; s++) {

		// section and bar
		graphHtml += "<div class='bar' style=" + "height:" + sections[s].sectionHeight + ";" + "background-color:" + sections[s].color + ";" + "bottom:" + "0" + ";"+ "width:" + sections[s].sectionWidth + ";" + "margin-left:" + sections[s].distance + ";" + "text-align:" + "center" + ";" + "></div>";

		//Name
		
		labelsHtml += "<div class='barName' style=" + "bottom:" + 0 + ";" + "bottom:" + graphLabelDivWidth/2 + ";" + "margin-left:" + ((labelDist * s) + (labelDist/data.length))  + ";" + ">" + sections[s].variableName + "</div>";

		//Value (this is in graph Html as it appears in graph)
		graphHtml += "<div class='barValue' style=" + "bottom:" + sections[s].sectionHeight + ";" + "margin-left:" + sections[s].distance + ";" + ">" + sections[s].variableValue + "</div>";

	}

	//value lines 
	var midValLine = barGraphHeight;

	var bottomValLine = barGraphHeight;

	var topValLine = barGraphHeight;
	
	graphHtml += "<hr class='valueLine' style=" + "width:" + lineWidth + ";" + "bottom:" + bottomValLine + ";" + ">";

	graphHtml += "<hr class='valueLine' style=" + "width:" + lineWidth + ";" + "margin-left:" + "bottom:" + midValLine + ";" + ">";


	graphHtml += "<hr class='valueLine' style=" + "width:" + lineWidth + ";" + "bottom:" + topValLine + ";" + ">";



	//border lines
	graphHtml += "<hr id='bottomLine' style=" + "width:" + lineWidth + ";"  + ">";

	graphHtml += "<hr id='topLine' style=" + "width:" + lineWidth + ";" + "bottom:" + (topValLine + (midValLine - bottomValLine)) + ";" + ">";

	graphHtml += "<hr id='verticalLine' style=" + "height:" + barGraphHeight+ ";" + ">";

	//append everything
	$(barGraphDiv).html(graphHtml);
    $(graphLabelDiv).html(labelsHtml);
	$(graphValuesDiv).html(valuesHtml);
	
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
		value: 150
	}
	var bar2 = {
		name: 'dogs',
		value: 350
	}
	var bar3 = {
		name: 'birds',
		value: 20
	}
	var bar4 = {
		name: 'snakes',
		value: 110
	}
	barArray.push(bar1);
	barArray.push(bar2);
	barArray.push(bar3);
	barArray.push(bar4);

	drawBarChart(barArray, '', "#graph");
});
