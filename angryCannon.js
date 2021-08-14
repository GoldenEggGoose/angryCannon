import { Explosion } from "./classes/explosion.js";
import { Cannon } from "./classes/cannon.js";
import { frameRate, reloadTime } from "./constants/constants.js";

const canvas = document.querySelector(`canvas`);
const c = canvas.getContext(`2d`);

const w = canvas.width;
export const h = canvas.height;
let isReloading = false;


const mouse = {
  x: 0,
  y: 0,
};

canvas.onmousemove = (event) => {
  mouse.x = event.clientX - canvas.offsetLeft;
  mouse.y = event.clientY - canvas.offsetTop;
};

let cannonballs = [];

const cannon = new Cannon(40, 30);
canvas.onclick = (event) => {
  if (!isReloading) {
    let diffX = mouse.x - cannon.x;
    let diffY = mouse.y - cannon.y;
    let distance = Math.sqrt(diffX * diffX + diffY * diffY);
    if (distance < 100) {
      distance = 100;
    }
    let speed = 0.02 * (distance + 20);
    cannon.fire(speed, cannonballs);
    isReloading = true;
    setTimeout(() => {
      isReloading = false;
    }, reloadTime);
  }
};

let explosions = [];
const render = () => {
  c.clearRect(0, 0, w, h);
  for (let i = cannonballs.length - 1; i >= 0; i--) {
    if (cannonballs[i].shouldIDie()) {
      explosions.push(new Explosion(cannonballs[i]));
      cannonballs.splice(i, 1);
    }
  }
  if (cannonballs) {
    cannonballs.forEach((ball) => {
      ball.draw(c);
      ball.move();
    });
  }
  explosions.forEach(explosion => {
    explosion.draw(c)
    explosion.move()
  });
  cannon.changeAngle(mouse);
  cannon.draw(c);
  setTimeout(() => {
    render();
  }, 1000/frameRate);
};
render();
