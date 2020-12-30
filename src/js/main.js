"use strict";

// const
const height = 400;
const width = 400;
const clickMap = document.querySelector(".js-map");
const textWhereIsTheTreasure = document.querySelector(".page__distance");
let click = 0;

// get random coordinates
function getRandomNumber(size) {
  return Math.ceil(Math.random() * size);
}

//objetct to fix coordinates: x, y
let target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};

// get distance in the triangle between click and random coordinates
let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt(diffX * diffX + (diffY + diffY));
};

// text, when clicked to know where is the random coordinates
let getDistancePx = (distance) => {
  if (distance < 30) {
    return "hirviendo";
  } else if (distance < 40) {
    return "quemando";
  } else if (distance < 60) {
    return "templado";
  } else if (distance < 100) {
    return "caliente";
  } else if (distance < 180) {
    return "frio";
  } else if (distance < 360) {
    return "muy frio";
  } else {
    return "congelado";
  }
};

const clickOnTheMap = (e) => {
  click++;
  let distance = getDistance(e, target);
  let distancePx = getDistancePx(distance);
  textWhereIsTheTreasure.innerHTML = `<h2>${distancePx}</h2>`;
  if (distance < 20) {
    // resultWin.style.display = "flex";
    alert(`Has encontrado el tesoro en ${click} intentos`);
    location.reload();
  }
};

// listeners
clickMap.addEventListener("click", clickOnTheMap);

//# sourceMappingURL=main.js.map
