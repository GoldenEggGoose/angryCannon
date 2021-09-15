import { w, h } from "../angryCannon.js";
import { elasticity, gravity } from "../constants/constants.js";
export class Enemy {
  constructor() {
    this.radius = 10 + Math.random() * 15;
    this.size = this.radius * 2;
    this.x = w;
    this.y = h / 2;
    this.dx = -Math.random() * 2 - 1;
    this.dy = (Math.random() - 0.5) * 6;
  }
  move() {
    this.x += this.dx;
    this.y += this.dy;
    this.dy += gravity;
    if (this.y + this.dy + this.radius >= h) {
      this.dy = this.dy * -elasticity;
    }
  }
  draw(c) {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.stroke();
  }
  checkCollision(object) {
    let diffX = this.x - object.x;
    let diffY = this.y - object.y;
    let diff = Math.sqrt(diffX * diffX + diffY * diffY);
    return diff <= this.size + object.size;
  }
}
