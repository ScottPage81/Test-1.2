// Makes new instances of all the classes required for the game
function makeNewGame(){
	window.objectCenter = {
		game: new Game(),
		board: new Board(BOARD_SIZE_HEIGHT, BOARD_SIZE_WIDTH),
		snake: new Snake(SNAKE_POSITION_TOP, SNAKE_POSITION_LEFT),
		level: new LevelManager()
	}
	
	// If the page has already loaded, render the board
	if(document.body){
		objectCenter.board.render();
	}
	
}

// Events

window.addEventListener("load", function(e){
	// Make the initial game
	makeNewGame();
	
	var play_button = document.getElementById("play");
	var pause_button = document.getElementById("pause");
	var restart_button = document.getElementById("restart");
	
	// Play button
	play_button.addEventListener("click", function(e){
		e.preventDefault();
		objectCenter.game.start(); // Start the game
	});
	

	// Pause button
	pause_button.addEventListener("click", function(e){
		e.preventDefault();
		objectCenter.game.stop(); // Stop the game
	});
	
	// Restart button
	restart_button.addEventListener("click", function(e){
		e.preventDefault();
		objectCenter.game.end(); // Finish the game
		objectCenter.game.destroy(); // Destroy the game (by making a new one and over writing the current)
		objectCenter.game.start(); // Start the new game
	});
	
	// Arrows
	var leftArrow = document.getElementById("ArrowLeft"),
		upArrow = document.getElementById("ArrowUp"),
		rightArrow = document.getElementById("ArrowRight"),
		downArrow = document.getElementById("ArrowDown");
	
	// When clicked or touched, attempt to change the snakes direction to left
	leftArrow.addEventListener("click", function(e){
		e.preventDefault();
		objectCenter.snake.changeDirection(SNAKE_LEFT);
	});
	leftArrow.addEventListener("touchstart", function(e){
		e.preventDefault();
		objectCenter.snake.changeDirection(SNAKE_LEFT);
	});
	
	// When clicked or touched, attempt to change the snakes direction to up
	upArrow.addEventListener("click", function(e){
		e.preventDefault();
		objectCenter.snake.changeDirection(SNAKE_UP);
	});
	upArrow.addEventListener("touchstart", function(e){
		e.preventDefault();
		objectCenter.snake.changeDirection(SNAKE_UP);
	});
	
	// When clicked or touched, attempt to change the snakes direction to right
	rightArrow.addEventListener("click", function(e){
		e.preventDefault();
		objectCenter.snake.changeDirection(SNAKE_RIGHT);
	});
	rightArrow.addEventListener("touchstart", function(e){
		e.preventDefault();
		objectCenter.snake.changeDirection(SNAKE_RIGHT);
	});
	
	// When clicked or touched, attempt to change the snakes direction to down
	downArrow.addEventListener("click", function(e){
		e.preventDefault();
		objectCenter.snake.changeDirection(SNAKE_DOWN);
	});
	downArrow.addEventListener("touchstart", function(e){
		e.preventDefault();
		objectCenter.snake.changeDirection(SNAKE_DOWN);
	});
	
	// Load the high score of the user if it exists
	if("highScore" in localStorage){
		document.getElementById(HIGH_SCORE_HOLDER_ID).innerHTML = "High Score: " + localStorage.highScore;
	}	
}, false);

// When a key is pressed...
window.addEventListener("keydown", function(e){
	// And if the game is currently being played...
	if(objectCenter.game.playing){
		// Prevent the keys default action from taking place (scrolling the page)	
		e.preventDefault();
		// And select which, if any of the arrow keys have been pressed...
		switch(e.which){
			// If it's the left arrow key...
			case KEY_LEFT:
				// Attempt to change the direction to left.
				objectCenter.snake.changeDirection(SNAKE_LEFT);
			break;

			// If it's the up arrow key...
			case KEY_UP:
				// Attempt to change the direction to up.
				objectCenter.snake.changeDirection(SNAKE_UP);
			break;

			// If it's the right arrow key...
			case KEY_RIGHT:
				// Attempt to change the direction to right.
				objectCenter.snake.changeDirection(SNAKE_RIGHT);
			break;

			// If it's the down arrow key...
			case KEY_DOWN:
				// Attempt to change the direction to down.
				objectCenter.snake.changeDirection(SNAKE_DOWN);
			break;
		}
	}
}, false);

// Prevent the page from zooming in and out when it is double tapped on a touch device
window.addEventListener("dblclick", function(e){
	e.preventDefault();
}, false);