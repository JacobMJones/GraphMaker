var bar = {
	height: 0,
	width: 0,
	color: "",
	name: "",
	value: "",
}
var barArray = [];

function drawBarChart(data, options, element) {

	for (var i = 0; i < data.length; i++) {
		
		var divName = "barDiv" + i;
		var div = document.createElement(divName);
		div.style.width = "100px";
		div.style.height = "100px";
		div.style.background = "red";
	//	div.style.color = "white";
	//	div.innerHTML = "Hello";

		document.getElementById("bar-graph").appendChild(div);
	}
}

function drawGraph() {
	drawBarChart(barArray, "none", "bar-graph");

}

function addBar() {

	var variableName = document.getElementById("variable-name").value;
	var variableValue = document.getElementById("variable-value").value;
	bar.name = variableName;
	bar.value = variableValue;
	barArray.push(bar);


	console.log(barArray);
}

$(document).ready(function () {

});
