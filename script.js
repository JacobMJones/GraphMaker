var barArray = []


function createBars(){
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
	
	var options = {
		colors: "blue red green yellow black",
		midline: true
	}

	drawBarChart(barArray, options, "#graph");
}
$(document).ready(function () {
	createBars();
});
