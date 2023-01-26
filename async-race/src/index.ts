import { postData } from "./API/Api";

import { getRandomColorForCar } from "./components/carSVG";
import { carMarcs, carModel } from "./components/carsContained";
import { Root } from "./components/Root";
import { forms } from "./components/Forms";
import {
  clickCardButtons,
  getGarage,
  getPages,
  getRandomNumber,
  postCar,
  putCar,
  resetCar,
  startRace,
  upDateGarage,
} from "./components/helps";

import "./style.scss";
import carsStorage from "./carsStorage/carsStorage";

document.body.insertAdjacentHTML("beforeend", forms());

const buttonRandom = document.createElement("button");
const buttonStartCars = document.createElement("button");
const resetButton = document.createElement("button");
document.body.appendChild(buttonRandom);
document.body.appendChild(buttonStartCars);
document.body.appendChild(resetButton);

buttonRandom.textContent = "Create random cars";
buttonStartCars.textContent = "Start Cars";
resetButton.textContent = "Reset";

document.body.appendChild(Root.root);
Root.root.classList.add(Root.className);

getGarage();

buttonRandom.addEventListener("click", async () => {
  const arrMass = [];
  for (let i = 0; i < 100; i++) {
    const obj = {
      name: `${carMarcs[getRandomNumber(carMarcs.length)]} ${
        carModel[getRandomNumber(carModel.length - 1)]
      }`,
      color: getRandomColorForCar(),
    };
    arrMass.push(obj);
  }
  arrMass.map((e) => postData(e));
  await upDateGarage();
  await getGarage();
  // console.log(arrMass);
});

resetButton.addEventListener("click", async () => {
  carsStorage.cars.map((elem) => resetCar(elem.id.toString()));
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.querySelector(".modal-car-winner-container")!.innerHTML = "";
});

buttonStartCars.addEventListener("click", async () => {
  startRace();
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
