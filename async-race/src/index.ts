import { postData } from "./API/Api";

import { getRandomColorForCar } from "./components/carSVG";
import { carMarcs } from "./components/carsContained";
import { Root } from "./components/Root";
import { forms } from "./components/Forms";
import {
  clickCardButtons,
  getGarage,
  getPages,
  getRandomNumber,
  postCar,
  putCar,
  startCarAnimation,
  upDateGarage,
} from "./components/helps";

import "./style.scss";
import carsStorage from "./carsStorage/carsStorage";

// const svg = document.createElement("div");
document.body.insertAdjacentHTML("beforeend", forms());
const buttonRandom = document.createElement("button");
const buttonStartCars = document.createElement("button");
document.body.appendChild(buttonRandom);
document.body.appendChild(buttonStartCars);
buttonRandom.textContent = "Create random cars";
buttonStartCars.textContent = "Start Cars";
document.body.appendChild(Root.root);
Root.root.classList.add(Root.className);
getGarage();

buttonRandom.addEventListener("click", async () => {
  const arrMass = [];
  for (let i = 0; i < 100; i++) {
    const obj = {
      name: carMarcs[getRandomNumber(carMarcs.length)],
      color: getRandomColorForCar(),
    };
    arrMass.push(obj);
  }
  arrMass.map((e) => postData(e));
  await upDateGarage();
  await getGarage();
  console.log(arrMass);
});

buttonStartCars.addEventListener("click", async () => {
  carsStorage.cars.map((elem) => startCarAnimation(elem.id.toString()));
});

document
  .querySelector(".cars-container")
  ?.addEventListener("click", async (e) => {
    const target = <HTMLElement>e.target;
    await getPages(target);
    await clickCardButtons(e);
  });

document
  .querySelector(".car-post-container")
  ?.addEventListener("submit", async (e) => {
    postCar(e);
  });

document
  .querySelector(".car-put-container")
  ?.addEventListener("submit", (e) => {
    putCar(e);
  });
