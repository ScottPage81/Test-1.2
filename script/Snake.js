function Snake(startTop, startLeft){
	this.animation = false;
	this.top = startTop;
	this.left = startLeft;
	this.moves = [
		[this.top, this.left]
	]
	this.suspend = 0;
	this.direction = SNAKE_UP;
	this.action = SNAKE_DESTROY;
	this.orientation = SNAKE_VERTICAL;
	this.descriptor = "snake";
}

Snake.prototype.start = function(){
	var snake = this;
	this.animation = window.setInterval(function(){
		snake.step();
	}, objectCenter.level.snakeSpeed);
}

Snake.prototype.step = function(){
	switch(this.direction){
		case SNAKE_LEFT:
			this.orientation = SNAKE_HORIZONTAL;
			this.move(0, -1);
		break;
		case SNAKE_UP:
			this.orientation = SNAKE_VERTICAL;
			this.move(-1, 0);
		break;
		case SNAKE_RIGHT:
			this.orientation = SNAKE_HORIZONTAL;
			this.move(0, 1);
		break;
		case SNAKE_DOWN:
			this.orientation = SNAKE_VERTICAL;
			this.move(1, 0);
		break;
	}
}

Snake.prototype.stop = function(){
	this.animation = window.clearTimeout(this.animation);
}

Snake.prototype.move = function(offsetTop, offsetLeft){
	var newTop = this.top + offsetTop,
		newLeft = this.left + offsetLeft;
	
	if(!(objectCenter.board.spaceExists(newTop, newLeft))){
		objectCenter.game.end();
	} else {
		if(this.suspend == 0){
			var lastTailBlock = this.moves.shift();
			var lastSquare = objectCenter.board.getSquare(
				lastTailBlock[0], 
				lastTailBlock[1]
			);
			if(lastSquare.weight == this){
				lastSquare.off();
			}
		} else {
			this.suspend--;
		}
		
		var newSpace = objectCenter.board.getSquare(newTop, newLeft);
		if(newSpace.hasAction){
			this.act(newSpace.weight.action);
			if("onact" in newSpace.weight){
				newSpace.weight.onact();
			}
		}
		
		this.moves.push([newTop, newLeft]);
		newSpace.on(this);
		
		this.top = newTop;
		this.left = newLeft;
	}
}

Snake.prototype.act = function(action){
	switch(action){
		case SNAKE_FEED_NORMAL:
			objectCenter.game.score(NORMAL_FOOD_SCORE);
			this.suspend += NORMAL_FOOD_TAIL;
		break;
		case SNAKE_FEED_SPECIAL:
			objectCenter.game.score(SPECIAL_FOOD_SCORE);
			this.suspend += SPECIAL_FOOD_TAIL;
		break;
		case SNAKE_DESTROY:
			objectCenter.game.end();
		break;
	}
}

Snake.prototype.changeDirection = function(direction){
	switch(direction){
		case SNAKE_LEFT:
		case SNAKE_RIGHT:
			if(this.orientation == SNAKE_VERTICAL){
				this.direction = direction;
			}
		break;
		case SNAKE_UP:
		case SNAKE_DOWN:
			if(this.orientation == SNAKE_HORIZONTAL){
				this.direction = direction;
			}
		break;		
	}
}