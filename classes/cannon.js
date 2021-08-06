import {h} from "../angryCannon.js"
import { convertDegreesToRadians, convertRadiansToDegrees } from "../functions/functions.js";
import {Cannonball} from "./cannonball.js"
export class Cannon {
    constructor(size, angle) {
      this.size = size;
      this.angle = angle;
      this.x = this.size / 2;
      this.y = h - this.size / 2;
    }
    changeAngle(mouse) {
      let diffX = mouse.x - this.x;
      let diffY = mouse.y - this.y;
      let theta = convertRadiansToDegrees(Math.atan2(diffY, diffX));
      this.angle = -theta;
    }
  
    fire(speed, cannonballs) {
      let radianAngle = convertDegreesToRadians(this.angle)
      let dx = Math.cos(radianAngle)*speed
      let dy = -Math.sin(radianAngle)*speed
      cannonballs.push(new Cannonball(this.x,this.y,dx,dy));
    }
  
    draw(c) {
      c.save();
      c.translate(this.x, this.y);
      c.strokeRect(-this.size / 20, 0, this.size / 10, this.size / 2);
      c.rotate(convertDegreesToRadians(-this.angle));
      c.fillRect(
        -this.size * 0.4,
        -this.size * 0.2,
        this.size * 0.4,
        this.size * 0.4
      );
      c.fillRect(0, -this.size * 0.1, this.size * 0.4, this.size * 0.2);
      c.restore();
    }
  }
  