import { getWinners, postData } from "./API/Api";
import { winnersModal } from "./components/winners";
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
const winners = document.createElement("button");
document.body.appendChild(buttonRandom);
document.body.appendChild(buttonStartCars);
document.body.appendChild(resetButton);
document.body.appendChild(winners);

buttonRandom.textContent = "Create random cars";
buttonStartCars.textContent = "Start Cars";
resetButton.textContent = "Reset";
winners.textContent = "Winners";
resetButton.disabled = true;
document.body.appendChild(Root.root);
Root.root.classList.add(Root.className);
alert("Сейчас делаю таблицу, надеюсь успею");
getGarage();
winners.addEventListener("click", async () => {
  const { items, winnersCount } = await getWinners(1);
  carsStorage.winners = items;
  carsStorage.winnersCount = winnersCount;
  document.body.insertAdjacentHTML("afterbegin", winnersModal());
});

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
  resetButton.disabled = true;
  carsStorage.cars.map((elem) => resetCar(elem.id.toString()));
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.querySelector(".modal-car-winner-container")!.innerHTML = "";
  buttonStartCars.disabled = false;
});

buttonStartCars.addEventListener("click", async () => {
  buttonStartCars.disabled = true;
  resetButton.disabled = true;
  await startRace();
  resetButton.disabled = false;
});

document
  .querySelector(".cars-container")
  ?.addEventListener("click", async (e) => {
    const target = <HTMLElement>e.target;
    await getPages(target);
    await clickCardButtons(e);
    buttonStartCars.disabled = false;
    resetButton.disabled = true;
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
