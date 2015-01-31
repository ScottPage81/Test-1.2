/****************************************************************************
	Name: Game.js
	Class(es): Game
	Created by: Scott Page
	
	GAME
	This is responsible for the management of the game as a whole, playing
	pausing, scoring, making food and ultimately ending the game are some 
	of the responsibilities
****************************************************************************/
/** GAME **/

/*
	Function: Game (constructor)
*/
function Game(){
	this.points = 0;
	this.playing = false;
	this.ended = false;
	this.isNew = true;
	if(!("highScore" in localStorage)){
		localStorage.highScore = 0;
	} 
}

/*
	Function: start
	
	If at the start of a new level, generate the level's food. Start the Snake moving
*/
Game.prototype.start = function(){
	if(!(this.ended)){
		this.playing = true;
		if(this.isNew){	
			for(var a = 0, square, food; a < objectCenter.level.foodCount; a++){
				this.generateFood();
			}
			this.isNew = false;
		}
		objectCenter.snake.start();
	}
}

/*
	Function: stop
	
	Pause the game
*/
Game.prototype.stop = function(){
	this.playing = false;
	objectCenter.snake.stop();
}


/*
	Function: start
	
	Pause the game permanently
*/
Game.prototype.end = function(){
	this.stop();
	this.playing = false;
	this.ended = true;
}


/*
	Function: destroy
	
	Overwrite the game that currently exists with a new one
*/
Game.prototype.destroy = function(){
	makeNewGame();
}

/*
	Function: generateFood
	
	Makes a food pieces 
*/
Game.prototype.generateFood = function(){
	// Adds a piece of food to an unoccupied space
	var addFood = function(constructor){
		square = objectCenter.board.getRandomSquare();
		food = new constructor();
		if(!(square.hasWeight)){
			if("onact" in square){
				square.onact();
			}
			square.on(food);
		}
	}

	// Normal food <- Always made
	addFood(NormalFood);
	
	// Special food <- Made based on probability
	if(Math.random() < objectCenter.level.specialFoodProb){
		addFood(SpecialFood);
	}
	
	// Poison food <- Made based on probability
	if(Math.random() < objectCenter.level.poisonFoodProb){
		addFood(PoisonFood);
	}
}

/*
	Function: score
	
	Adds points to the current score and high score if need, updates the HTML Game Data
*/
Game.prototype.score = function(points){
	this.points += points;
	
	// Update the HTML score
	document.getElementById(SCORE_HOLDER_ID).innerHTML = "Score: " + this.points;
	
	if(this.points > localStorage.highScore){
		localStorage.highScore = this.points;
		
		// Update the HTML high score
		document.getElementById(HIGH_SCORE_HOLDER_ID).innerHTML = "High Score: " + localStorage.highScore;
	}
}