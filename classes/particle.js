import { h } from "../angryCannon.js";
import { elasticity, frameRate, gravity } from "../constants/constants.js";

export class Particle{
    constructor(x,y,dx,dy){
      this.x = x
      this.y = y
      this.dx = dx
      this.dy = dy
      this.life = frameRate
    }
    move(){
      this.life-=1
      this.x += this.dx;
      this.dy += gravity;
      this.y += this.dy;
      if(this.y+ this.dy >= h){
        this.dy = this.dy*-elasticity
        this.dx*=elasticity
      }
    }
    draw(c){
      c.save();
      c.translate(this.x, this.y);
      c.beginPath();
      c.arc(0, 0, 1, 0, 2 * Math.PI);
      c.fill();
      c.restore();
    }
  }
  