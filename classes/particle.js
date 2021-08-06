export class Particle{
    constructor(x,y){
      this.x = x
      this.y = y
      this.dx = dx
      this.dy = dy
    }
    move(){
      this.x += this.dx;
      this.dy += gravity;
      this.y += this.dy;
    }
    draw(){
      c.save();
      c.translate(this.x, this.y);
      c.beginPath();
      c.arc(0, 0, 1, 0, 2 * Math.PI);
      c.fill();
      c.restore();
    }
  }
  