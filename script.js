
var bar = {
	height: 0,
	width: 0,
	color: "",
	name: "",
	value: "",
}
var barArray = [];

function drawBarChart(data, options, element){
	
	
}

function addBar(){
	
	 var variableName = document.getElementById("variable-name").value;
	 var variableValue = document.getElementById("variable-value").value;
	
	bar.height = 50;
	bar.width = 25;
	bar.color = '#ee1';
	bar.name = variableName;
	bar.value = variableValue;
	barArray.push(bar);
	
	console.log(variableName + '' + variableValue);
}

$(document).ready(function () {

});