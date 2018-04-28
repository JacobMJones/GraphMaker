var bar = {
	name: "",
	value: "",
}

var barArray = [];
var bar1;
var bar2;

var sections = [];

function drawBarChart(data, options, element) {

	var myHtml = "";
	//setup sections and info
	for (var i = 0; i < data.length; i++) {

		section = {
			divName: "barDiv" + i,
			variableName: data[i].name,
			variableValue: data[i].value,
			sectionHeight: data[i].value + 20,
			color: randomColor(),
			barHeight: data[i].value,
			sectionWidth: (90 / data.length) - (5 / data.length) + "%",
			distance: (100 / data.length) * i + "%"
		}
		sections.push(section);
	}

	//append html to element
	for (var s = 0; s < sections.length; s++) {

		// section and bar
		myHtml += "<div class='bar' style=" + "height:" + sections[s].sectionHeight + ";" + "background-color:" + sections[s].color + ";"  + "width:" + sections[s].sectionWidth + ";" + "margin-left:" + sections[s].distance + ";" + "text-align:" + "center" + ";" + "></div>";
		
		
		//Name
		myHtml += "<div class='barName' style=" + "height:" + 50 + ";" + "margin-left:" + sections[s].distance + ";" + ">" + sections[s].variableName + "</div>";
		
		//Value
		myHtml += "<div class='barValue' style=" + "bottom:" + (sections[s].sectionHeight + 50) + ";" + "margin-left:" + sections[s].distance + ";"+">" + sections[s].variableValue  + "</div>";
	}
	myHtml += "<hr id='bottomLine'>";
	$(element).html(myHtml);
	
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
		value: 250
	}
	var bar3 = {
		name: 'birds',
		value: 50
	}
	var bar4 = {
		name: 'snakes',
		value: 110
	}
	barArray.push(bar1);
	barArray.push(bar2);
	barArray.push(bar3);
	barArray.push(bar4);
	barArray.push(bar4);
	barArray.push(bar3);
	barArray.push(bar2);


	drawBarChart(barArray, '', "#bar-graph");
});
