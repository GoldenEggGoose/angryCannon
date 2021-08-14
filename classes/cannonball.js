import { h } from "../angryCannon.js";
import { gravity } from "../constants/constants.js";

export class Cannonball {
    constructor(x, y,dx,dy) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.size = 10;
    }
    move() {
      this.x += this.dx;
      this.dy += gravity;
      this.y += this.dy;
    }
    shouldIDie(){
      if(this.y +this.dy >= h){
        return true
      }else{
        return false
      }
    }
  
    draw(c) {
      c.save();
      c.translate(this.x, this.y);
      c.beginPath();
      c.arc(0, 0, this.size / 2, 0, 2 * Math.PI);
      c.fill();
      c.restore();
    }
  }
  