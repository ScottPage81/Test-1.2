/****************************************************************************
	Name: Food.js
	Class(es): Food, NormalFood, SpecialFood, PoisonFood
	Created by: Scott Page
	
	FOOD
	This is an abstract class that is existent only to be inherited from
	
	NORMAL FOOD
	This will be the most important type of food, once all of the normal food
	in a level is gone, the game progresses to the next level. As the level
	number increases, more and more of these will appear on the level
	
	SPECIAL FOOD
	This is there as a kind of bonus to players who want a higher score, it
	serves no real purpose to the running of the game other than increasing
	the score and adding length to the snake
	
	POISON FOOD
	This is a food to avoid, it will kill the snake, ending the game
****************************************************************************/
/** FOOD **/
// Abstract food class
function Food(){
	// This defines how the food should be shown on the board
	this.descriptor = false;
	
	// This defines what should happen if the snake collides with the food
	this.action = false;
}

/** NORMAL FOOD **/
function NormalFood(){
	this.descriptor = "normalFood";
	this.action = SNAKE_FEED_NORMAL; // if the Snake hits the object, normal feed it
}
// Inherit from the abstract Food class
NormalFood.prototype = new Food();
NormalFood.prototype.constructor = NormalFood;
NormalFood.prototype.onact = function(){
	objectCenter.level.checkLevelUp();
}

/** SPECIAL FOOD **/
function SpecialFood(){
	this.descriptor = "specialFood";
	this.action = SNAKE_FEED_SPECIAL; // if the Snake hits the object, special feed it
}
// Inherit from the abstract Food class
SpecialFood.prototype = new Food();
SpecialFood.prototype.constructor = SpecialFood;

/** POSION FOOD **/
function PoisonFood(){
	this.descriptor = "poisonFood";
	this.action = SNAKE_DESTROY; // if the Snake hits the object, destroy it
}
// Inherit from the abstract Food class
PoisonFood.prototype = new Food();
PoisonFood.prototype.constructor = PoisonFood;