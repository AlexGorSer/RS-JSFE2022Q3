import { getCarsGarage, deleteCar } from "./API/Api";
import carsStorage from "./carsStorage/carsStorage";
import { carSVG } from "./components/carSVG";
import { carsCard } from "./components/carsContained";

import "./style.scss";

// const but = document.createElement("button");
// document.body.appendChild(but);
const svg = document.createElement("div");
document.body.appendChild(svg);
svg.classList.add("svg-container");
const getGarage = () => {
  carsStorage.cars.map((e) =>
    svg.insertAdjacentHTML(
      "beforeend",
      `${carsCard(e.name, carSVG(e.color), e.id)}`
    )
  );
};
getGarage();

document
  .querySelector(".svg-container")
  ?.addEventListener("click", (e) => clickCardButtons(e));

const clickCardButtons = async (event: Event) => {
  const target = <HTMLElement>event.target;
  if (target.classList.contains("cars-card-remove")) {
    await deleteCar(+target.id);
    await upDateGarage();
    svg.innerHTML = "";
    getGarage();
  }
};

export const upDateGarage = async () => {
  const { items, carsCount } = await getCarsGarage(carsStorage.carsPage);
  carsStorage.cars = items;
  carsStorage.carsCount = carsCount;
  console.log(carsStorage.cars, carsStorage.carsCount);
};
