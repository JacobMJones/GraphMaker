var bar = {
	name: "",
	value: "",
}

var barArray = [];
var bar1;
var bar2;

function drawBarChart(data, options, element) {

	var myHtml = "";

	//first pass is the bar graph
	for (var i = 0; i < data.length; i++) {
		var divName = "barDiv" + i;
		var variableName = data[i].name;
		var variableValue = data[i].value;
		var height = variableValue;
		var width = (90 / data.length) - (5 / data.length) + "%";
		var distance = (100 / data.length) * i + "%";
		var col = randomColor();

		myHtml += "<div class='bar' style=" + "background-color:" + col + ";" + "height:" + height + ";" + "width:" + width + ";" + "margin-left:" + distance + ";" + "text-align:" + "center" + ";" + ">" + variableValue + "</div>";
	}

	//second pass is for variable name
	for (var d = 0; d < data.length; d++) {
		var divName = "barName" + d;
		var name = data[d].name;

		var distance = (100 / data.length) * d + "%";


		myHtml += "<div class='barName' style=" + "height:" + 50 + ";" + "margin-left:" + distance + ";" + ">" + name + "</div>";
	}


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


	drawBarChart(barArray, '', "#bar-graph");
});
