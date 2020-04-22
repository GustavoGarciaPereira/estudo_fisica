var canvas = document.getElementById('myCanvas');

canvas.width = screen.width - 40
var ctx = canvas.getContext('2d');

var ball = {
  x: 0,
  y: 100,
  radius: 25,
  color: 'blue',
  velocidade: 1,
  aceleracao: 0,
  atualizar(){
    ball.velocidade = ball.velocidade + ball.aceleracao
    ball.x = ball.x + ball.velocidade 
  },
  draw: function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();    
  }
};



var x = 100;
function loop(){
  ball.atualizar()
  ball.draw()
  window.requestAnimationFrame(loop);
}
loop()