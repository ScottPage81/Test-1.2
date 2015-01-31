/****************************************************************************
	Name: Board.js
	Class(es): Board
	Created by: Scott Page
	
	BOARD
	This is responsible for the game's board. This means both the HTML table that
	the user sees and the JavaScript Square classes which the pieces of the game 
	occupy.
****************************************************************************/
/** BOARD **/
/*
	Function: Board (constructor)
	
	Arguments:
		- height: this is the amount of rows that the HTML table will have
		- width: this is the amount of cells in each row
*/
function Board(height, width){
	this.height = height;
	this.width = width;
	this.grid = this.makeGrid();
}

/*
	Function: makeGrid
	
	This is used to make the this.grid property of the object
	
	Returns:
		- an array of arrays of Square objects
*/
Board.prototype.makeGrid = function(){
	var grid = [];
	for(var a = 0; a < this.height; a++){
		var row = [];
		for(var b = 0; b < this.width; b++){
			row.push(new Square());
		}
		grid.push(row);
	}
	return grid;
}

/*
	Function: render
	
	Processes the this.grid property into a HTML table and adds the table to the page
*/
Board.prototype.render = function(){
	// Clear any previous board
	document.getElementById(GAME_HOLDER_ID).innerHTML = "";
	
	var table = document.createElement("table");
	for(var a = 0, row; a < this.height; a++){
		row = document.createElement("tr");
		for(var b = 0; b < this.width; b++){
			row.appendChild(this.grid[a][b].element);
		}
		table.appendChild(row);
	}
	
	// Add the new board to the page
	document.getElementById(GAME_HOLDER_ID).appendChild(table);
}

/*
	Function: getSquare
	
	This returns a specific Square object in the this.grid property
	
	Arguments:
		- top: the index of the array that the Square is in
		- left: the index in the array of the square
	
	Returns:
		- the specified Square object
		- false if the space being requested is not found
*/
Board.prototype.getSquare = function(top, left){
	if(this.spaceExists(top, left)){
		return this.grid[top][left];
	}
	return false;
}

/*
	Function: getRandomSquare
	
	This returns a random Square object in the this.grid property
	
	Returns:
		- the random Square object
*/
Board.prototype.getRandomSquare = function(){
	var randTop = Math.floor(Math.random() * this.height);
	var randLeft = Math.floor(Math.random() * this.width);
	return this.grid[randTop][randLeft];
}

/*
	Function: spaceExists
	
	This returns a boolean value representing whether the space exists or not
	
	Arguments:
		- top: this index of this.grid that is to be checked
		- left: the index of the this.grid[top] array to be checked
	
	Returns:
		- true if both indexes exist
		- false if not
*/
Board.prototype.spaceExists = function(top, left){
	return (top >= 0 && top < this.height && left >= 0 && left < this.width);
}

/*
	Function: clear
	
	Turn off all of the Squares that are in the grid
*/
Board.prototype.clear = function(){
	for(var a = 0, row; a < this.height; a++){
		for(var b = 0; b < this.width; b++){
			this.grid[a][b].off();
		}
	}
}