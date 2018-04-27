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
		
		
		$('#bar-graph').append("<div class='divName'>divName</div>").css({"background-color": "yellow", "height": "200", "width": "100"}).text(divName);
		
		
		/*
		
		var div = document.createElement(divName);
		div.style.width = "200px";
		div.style.height = "500px";
		div.style.background = "blue";
		document.getElementById("bar-graph").appendChild(div);
		*/
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
