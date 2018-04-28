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
 
style="color:blue;"
	
	var myHtml = "";
	
	for (var i = 0; i < data.length; i++) {
	
		var divName = "barDiv" + i;
		var distance = i * 10;
		var col = randomColor();
		myHtml += "<div class='bar' style=" + "margin-left:" + distance + ";" + "background-color:" + col  + ";" + "height:200px" + ">" + divName + "</div>";
		
		$( "#bar-graph" ).html(myHtml);
		//$('#bar-graph').append("<div class='bar'>divName</div><br>").css({"background-color": col, "height": "200", "width": "100"}).text(divName);
		
	//$('#bar-graph').append("<div class='bar'></div>").append("<p>dd</p>").css({"background-color": "col", "float": "left", "height": "200", "width": "50%"});

		/*
		
		var div = document.createElement(divName);
		div.style.width = "200px";
		div.style.height = "500px";
		div.style.background = "blue";
		document.getElementById("bar-graph").appendChild(div);
		*/
	}

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
