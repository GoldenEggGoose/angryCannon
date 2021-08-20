import { Enemy } from "../classes/enemy.js";
import { frameRate } from "../constants/constants.js";

export const convertDegreesToRadians = (degrees) => {
  return (degrees / 180) * Math.PI;
};

export const convertRadiansToDegrees = (radians) => {
  return (radians / Math.PI) * 180;
};

export const shouldSpawnEnemy = () =>{
  let randomThing = Math.random()*100
  if(randomThing<60/frameRate){
    return true
  }else{
    return false
  }
}
