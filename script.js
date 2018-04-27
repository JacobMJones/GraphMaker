
var bar = {
	height: 0,
	width: 0,
	color: "",
	name: "",
	value: "",
}
var barArray = [];

function drawBarChart(data, options, element){
	
	//for (var i = 0; )
}

function addBar(){
	
	var variableName = document.getElementById("variable-name").value;
	var variableValue = document.getElementById("variable-value").value;
	bar.name = variableName;
	bar.value = variableValue;
	barArray.push(bar);
	
	
	console.log(barArray);
}

$(document).ready(function () {

});