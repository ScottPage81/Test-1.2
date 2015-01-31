// Represents which direction the snake can move / is moving in
SNAKE_LEFT = 1;
SNAKE_UP = 2;
SNAKE_RIGHT = 3;
SNAKE_DOWN = 4;

// Represents the various actions that can be imposed on the snake
SNAKE_FEED_NORMAL = 5;
SNAKE_FEED_SPECIAL = 6;
SNAKE_DESTROY = 7;

// Represents the axis the snake is moving in
SNAKE_HORIZONTAL = 8
SNAKE_VERTICAL = 9 

// Represents the amount of points and the length of the tail gained
// by eating various normal and special food
NORMAL_FOOD_SCORE = 1;
NORMAL_FOOD_TAIL = 1;
SPECIAL_FOOD_SCORE = 10;
SPECIAL_FOOD_TAIL = 5;

// Adds descriptive names to the arrow keys' key codes
KEY_LEFT = 37;
KEY_UP = 38;
KEY_RIGHT = 39;
KEY_DOWN = 40;

// The boards dimensions
BOARD_SIZE_HEIGHT = 66;
BOARD_SIZE_WIDTH = 100;

// The initial position of the snake on the board
SNAKE_POSITION_TOP = Math.ceil(BOARD_SIZE_HEIGHT / 2);
SNAKE_POSITION_LEFT = Math.ceil(BOARD_SIZE_WIDTH / 2);

// Initial values for the variable that change level by level
I_FOOD_COUNT = 10; // The amount of normal food that will be generated
I_SNAKE_SPEED = 100; // This interval between the snake's movement
I_SPECIAL_FOOD_PROB = 1; // The chance that a special food will be made with each piece of normal food
I_POISON_FOOD_PROB = 0.01; // The chance that a poison food will be made with each piece of normal food

// The multipliers for each of the variables that change level by level
FOOD_COUNT_M = 1.2;
SNAKE_SPEED_M = 0.99;
SPECIAL_FOOD_PROB_M = 0.9;
POISON_FOOD_PROB_M = 4;

// The value of ID attributes of special elements in the HTML code
GAME_HOLDER_ID = "Game";
HIGH_SCORE_HOLDER_ID = "highScore";
SCORE_HOLDER_ID = "score";
LEVEL_HOLDER_ID = "level";