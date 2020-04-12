var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//var ball = {
//  x: 0,
//  y: 100,
//  radius: 25,
//  color: 'blue',
//  draw: function() {
//    ctx.clearRect(0, 0, canvas.width, canvas.height);
//    this.x += 1;
//
//    
//    ctx.beginPath();
//    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//    ctx.closePath();
//    ctx.fillStyle = this.color;
//    ctx.fill();
//    
//    window.requestAnimationFrame(this.draw());
//    
//  }
//};


//function draw() {
//  // reset canvas
//  ctx.clearRect(0, 0, canvas.width, canvas.height);
//  //update state
//
//  // render state
//  ball.x +=10
//
//  window.requestAnimationFrame(draw);
//}

//window.requestAnimationFrame(ball.draw());
var x = 100;
function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  x+=1
  ctx.beginPath();
  ctx.arc(x, 100, 10, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fillStyle = 'blue';
  ctx.fill();
  window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);