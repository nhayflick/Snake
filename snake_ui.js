$(function () {
  var b = new Board()
  STEP_TIME_MILLIS = 60;
  var interval;

  var runStep = function(){
    $('html').keydown(function (event) {
      console.log("You pressed keycode: " + event.keyCode);
      b.snake.turn(event.keyCode);
    });
    b.step();
    render(b)
    if (b.checkKill()) {
      alert("Game Over!");
      clearInterval(interval);
    }
  };

  function runLoop() {
    interval = window.setInterval(runStep, STEP_TIME_MILLIS);
  }
  runLoop(b);
  // render(b)
  // b.step();
  // b.step();
  // b.step();
  // render(b)
});


var render = function(b){
  var ctx = $('#canvas')[0].getContext("2d");
  ctx.clearRect (0,0,500,500);
  renderCircle(b.snakeHead, ctx)
  for(var i in b.snakeBody) {
    renderCircle(b.snakeBody[i], ctx);
  }
  renderCircle(b.food, ctx);
}

var renderCircle = function(coord, ctx){
  ctx.beginPath();
  ctx.arc((coord[0] * 10) + 5, (coord[1] * 10) + 5, 5, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}


