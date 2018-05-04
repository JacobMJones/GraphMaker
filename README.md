# GraphMaker

This is a bar graph library that creates simple bar graphs. 

![alt text](https://imgur.com/a/2jjurwT)
## Getting Started

All the magic happens in a single function, drawBarGraph(data,options,element).

### data 
is an array of objects. Each object must contain an attribute called 'name' and an attribute called 'value'. 
The 'name' attribute will be the label at the bottom of the bar graph and the 'value' attribute will be the value 
of the 'name' attribute.  

### options: 
is an object. If you include any of the following options they will be included in the styling of the graph. 
If an attribute is not present a default style is used. 

####colors: 
is an array of colors in hex format. They must be seperated by commas with no spaces in the string. For instance,
 
 ```colors: "#0000FF,#FF0000,#00FF00,#FFFF00,#aaa229,``` is used in the above picture. If the options object doesn't contain a 'colors' 
  attribute the bars will be randomly colored.
  
####showMidLine: 
is a boolean. If it is true, the line and value at the middle of the graph is shown. Set to false, they are not. 
		
####insideValues: 
is a boolean. If it is true, the values will be shown inside the graph, Set to false, they will not. 


### Prerequisites

JQuery



### Examples

```
Give examples
```

## Authors

* **Jacob Jones** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

