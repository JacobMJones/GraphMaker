
function drawGraph() {
	drawBarChart(barArray, "none", "bar-graph");
}

$(document).ready(function () {
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

	drawBarChart(barArray, '', "#graph");
});
