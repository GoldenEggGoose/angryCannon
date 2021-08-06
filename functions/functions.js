export const convertDegreesToRadians = (degrees) => {
  return (degrees / 180) * Math.PI;
};

export const convertRadiansToDegrees = (radians) => {
  return (radians / Math.PI) * 180;
};

export const sayHi = () => {
  return alert("Hi");
};
