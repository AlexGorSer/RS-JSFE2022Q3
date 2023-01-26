import { getWinners } from "./API/Api";
import { winnersModal } from "./components/winners";

import { Root } from "./components/Root";
import { forms } from "./components/Forms";
import {
  clickCardButtons,
  createRandomCar,
  getGarage,
  getPages,
  postCar,
  putCar,
  resetCar,
  startRace,
} from "./components/helps";

import "./style.scss";
import carsStorage from "./carsStorage/carsStorage";

document.body.insertAdjacentHTML("beforeend", forms());

const buttonRandom = document.createElement("button");
const buttonStartCars = document.createElement("button");
const resetButton = document.createElement("button");
export const winners = document.createElement("button");

const modal = document.createElement("div");
document.body.appendChild(buttonRandom);
document.body.appendChild(buttonStartCars);
document.body.appendChild(resetButton);
document.body.appendChild(winners);
document.body.appendChild(modal);

buttonRandom.textContent = "Create random cars";
buttonStartCars.textContent = "Start Cars";
resetButton.textContent = "Reset";
winners.textContent = "Winners";

resetButton.disabled = true;
document.body.appendChild(Root.root);
Root.root.classList.add(Root.className);

getGarage();
winners.addEventListener("click", async () => {
  const { items, winnersCount } = await getWinners(1);
  carsStorage.winners = items;
  carsStorage.winnersCount = winnersCount;
  console.log(carsStorage.winners);
  document.body.insertAdjacentHTML("afterbegin", await winnersModal());
  document
    .querySelector(".close-modal-button")
    ?.addEventListener("click", () => {
      document.body.removeChild(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.querySelector(".winners_modal-container")!
      );
    });
  document.querySelector(".modal-pref")?.addEventListener("click", async () => {
    carsStorage.winnersPages--;
    const { items } = await getWinners(carsStorage.winnersPages);
    carsStorage.winners = items;
  });
  document.querySelector(".modal-next")?.addEventListener("click", async () => {
    carsStorage.winnersPages++;
    const { items } = await getWinners(carsStorage.winnersPages);
    carsStorage.winners = items;
  });
});

buttonRandom.addEventListener("click", async () => {
  createRandomCar();
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
  winners.disabled = true;
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
