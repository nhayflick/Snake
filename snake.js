function Snake() {
  this.direction = 39;
}

Snake.prototype.turn = function(direction) {
  this.direction = direction;
}

Snake.prototype.getOffset = function() {
  var direction = this.direction;
  switch (direction) {
      case 39:
        return [1,0];
      case 38:
        return [0,-1];
      case 37:
        return [-1,0];
      case 40:
        return [0,1];
  };
}

var food = function() {
  return [Math.floor(Math.random()*50), Math.floor(Math.random()*50)];
}

function Board() {
  this.snake = new Snake()
  this.snakeBody = [[8,10],[9,10]];
  this.snakeHead = [10,10];
  this.origin = [10,10];
  this.food = food()
}

var include = function(array, element){
  for (i=0; i < array.length; i++){
    if (array[i].toString() == element.toString()) {
      return true;
    }
  }
  return false;
}

Board.prototype.checkKill = function() {
  if(include(this.snakeBody, this.snakeHead)) {
    return true;
  } else if (this.snakeHead[0] < 0 || this.snakeHead[0] >= 50 || this.snakeHead[1] < 0 || this.snakeHead[1] >= 50) {
      return true;
  } else {
    return false;
  }
}

Board.prototype.snakeEat = function() {
  if(this.snakeHead.toString() != this.food.toString()) {
    this.snakeBody.shift();
  } else {
    this.food = food();
  }
}

Board.prototype.step = function() {
  //console.log("snake body:" + this.snakeBody)
  var offset = this.snake.getOffset();
  this.snakeBody.push([this.snakeHead[0], this.snakeHead[1]]);
  this.snakeEat();
  this.snakeHead = [parseInt(this.snakeHead[0]) + parseInt(offset[0]), parseInt(this.snakeHead[1]) + parseInt(offset[1])];
};


// a = new Board;
// console.log(a.food);
// console.log(a.snake_head);
// console.log(a.snake_body);
// a.step();
// console.log(a.snake_head);
// console.log(a.snake_body);
// a.step();
// console.log(a.snake_head);
// console.log(a.snake_body);
// a.snake.turn("north");
// a.step();
// console.log(a.snake_head);
// console.log(a.snake_body);
// a.step();
// console.log(a.snake_head);
// console.log(a.snake_body);
