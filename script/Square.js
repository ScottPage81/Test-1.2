/****************************************************************************
	Name: Square.js
	Class(es): Square
	Created by: Scott Page
	
	SQUARE
	This is responsible for managing the spaces of the board, this is done by 
	storing the HTML table cell element that represents the space and 
	managing it's appearance on the page
****************************************************************************/
/** SQUARE **/

/*
	Function: Sqaure (constructor)
*/
function Square(){
	this.element = document.createElement("td");
	this.element.className = "square";
	this.hasWeight = false;
	this.weight = false;
	this.hasAction = false;
}

/*
	Function: on
	
	Puts an object on a square
	
	Arguments:
		- weight: the object that is to be put on the square
*/
Square.prototype.on = function(weight){
	this.hasWeight = true;
	this.weight = weight;
	if("descriptor" in weight){
		this.element.className += " " + this.weight.descriptor + " ";
	}
	if("action" in weight){
		this.hasAction = true;
	}
}

/*
	Function: off
	
	Takes any object off the square
	
	Arguments:
		- weight: the object that is to be put on the square
*/
Square.prototype.off = function(){
	this.hasWeight = false;
	this.weight = false;
	this.element.className = "square";
	this.hasAction = false;
}
