# GraphMaker

bargraph.js is a bar graph library that creates simple bar graphs. 

[![bargraph1.png](https://s31.postimg.cc/totaximhn/bargraph1.png)](https://postimg.cc/image/mycto2zbr/)
## Getting Started

All the magic happens in a single function, **drawBarGraph(data,options,element)**.

### data 
is an array of objects. Each object must contain an attribute called 'name' and an attribute called 'value'. 
The 'name' attribute will be the label at the bottom of the bar graph and the 'value' attribute will be the value 
of the 'name' attribute.  

### options: 
is an object. If you include any of the following options they will be included in the styling of the graph. 
If an attribute is not present a default style is used. The options are 'colors', 'showMidLine', and 'insideValues'.

  #### colors: 
is an array of colors in hex format. They must be seperated by commas with no spaces in the string. For instance,
 
 ```colors: "#0000FF,#FF0000,#00FF00,#FFFF00,#aaa229"```
 
 is used in the above picture. If the options object doesn't contain a 'colors' attribute the bars will be randomly colored.
  
  #### showMidLine: 
is a boolean. If it is true, the line and value at the middle of the graph is shown. Set to false, they are not. 
		
  #### insideValues: 
is a boolean. If it is true, the values will be shown inside the graph. Set to false, they will not. 

### element: 
is a reference to a div formatted for jQuery. The graph will use the dimensions of the 'element' to scale the graph. 

### Prerequisites

jQuery

### Example

```
var barArray = [];
var options;

function createBars() {
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
}

barArray.push(bar1);
barArray.push(bar2);
barArray.push(bar3);

options = {
	colors: "#0000FF,#FF0000,#00FF00,#FFFF00,#aaa229,",
	showMidLine: true,
	insideValues: false 
};

}
$(document).ready(function() {
	createBars();
	drawBarChart(barArray, options, "#graph");
});

```

## Bugs/Issues

If the div containing the graph is too small the graph becomes too cluttered to read. 

## Roadmap

There are no plans to update this library at the present time. 

## External Resources

Please refer to the 'Resources Used" text file in this repository.

## Authors

* **Jacob Jones** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

