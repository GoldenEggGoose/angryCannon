import { Explosion } from "./classes/explosion.js";
import { Cannon } from "./classes/cannon.js";
import { frameRate, reloadTime } from "./constants/constants.js";
import { Enemy } from "./classes/enemy.js";
import { shouldSpawnEnemy } from "./functions/functions.js";

const canvas = document.querySelector(`canvas`);
const c = canvas.getContext(`2d`);

export const w = canvas.width;
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
let gameOver = false;
let explosions = [];
let enemies = [];
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
  if (shouldSpawnEnemy()) {
    enemies.push(new Enemy());
  }
  enemies.forEach((enemy) => {
    enemy.move();
    enemy.draw(c);
    cannonballs.forEach((cannonball) => {
      if (enemy.checkCollision(cannonball)) {
        explosions.push(new Explosion(enemy));
      }
    });
  });
  for (let i = enemies.length - 1; i >= 0; i--) {
    enemies[i].draw(c);
    enemies[i].move();
    for (let j = cannonballs.length - 1; j >= 0; j--) {
      if (enemies[i].checkCollision(cannonballs[j])) {
        explosions.push(new Explosion(enemies[i]));
        cannonballs.splice(j, 1);
        enemies.splice(i, 1);
        break;
      }
    }
  }

  explosions.forEach((explosion) => {
    explosion.draw(c);
    explosion.move();
  });
  cannon.changeAngle(mouse);
  cannon.draw(c);

  enemies.forEach((enemy) => {
    if (enemy.x <= 0) {
      gameOver = true;
    }
  });
  setTimeout(() => {
    if (!gameOver) {
      render();
    } else {
      c.save()
      c.fillStyle = "red";
      c.font = "48px Segoe UI";
      c.textAlign = "center";
      c.textBaseline = "middle";
      c.fillText("Game Over", w / 2, h / 2, 1000);
      c.restore()
    }
  }, 1000 / frameRate);
};
render();
