/****************************************************************************
	Name: Game.js
	Class(es): Game
	Created by: Scott Page
	
	GAME
	This is responsible for the management of the game as a whole, playing
	pausing, scoring, making food and ultimately ending the game are some 
	of the responsibilities
****************************************************************************/
/** LEVEL MANAGER **/

function LevelManager(){
	this.checks = 0;
	this.levelNumber = 1;
	this.target = I_FOOD_COUNT;
	
	this.snakeSpeed = I_SNAKE_SPEED;
	this.foodCount = I_FOOD_COUNT;
	this.specialFoodProb = I_SPECIAL_FOOD_PROB;
	this.poisonFoodProb = I_POISON_FOOD_PROB;
}

LevelManager.prototype.checkLevelUp = function(){
	this.checks++;
	if(this.checks >= this.target){
		this.levelUp();
	}
}

LevelManager.prototype.levelUp = function(){
	this.levelNumber++;
	
	objectCenter.game.stop();
	
	this.snakeSpeed *= SNAKE_SPEED_M;
	this.checks = 0;
	this.target = this.foodCount *= FOOD_COUNT_M;
	this.specialFoodProb *= SPECIAL_FOOD_PROB_M;
	this.poisonFoodProb *= POISON_FOOD_PROB_M;
	
	objectCenter.board.clear();
	
	document.getElementById(LEVEL_HOLDER_ID).innerHTML = "Level: " + this.levelNumber;
	
	objectCenter.snake = new Snake(SNAKE_POSITION_TOP, SNAKE_POSITION_LEFT);
	objectCenter.game.isNew = true;
	objectCenter.game.start();	
}