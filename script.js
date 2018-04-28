var bar = {
	height: 0,
	width: 0,
	color: "",
	name: "",
	value: "",
}
var barArray = [];

function drawBarChart(data, options, element) {



	var myHtml = "";
var distance = 1;
	for (var i = 0; i < data.length; i++) {
	
		var divName = "barDiv" + i;
		var distance = i + 3 +"%";
		var col = randomColor();
		myHtml += "<div class='bar' style=" + "margin-left:" + distance + ";" + "background-color:" + col  + ";" + "height:200px" + ">" + divName + "</div>";
		
	

	}
	$( "#bar-graph" ).html(myHtml);
}
function randomColor(){
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
	bar.value = variableValue;
	barArray.push(bar);
}

$(document).ready(function () {

});
