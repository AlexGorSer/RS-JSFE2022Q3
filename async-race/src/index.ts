import { getCarsGarage } from "./API/Api";
import carsStorage from "./carsStorage/carsStorage";
import { carSVG, getRandomColorForCar } from "./components/car";

import "./style.scss";

// const randomColor = Math.floor(Math.random() * 16777215).toString(16);

// const car = {
//   name: "Teals",
//   color: `#${getRandomColorForCar}`,
// };

const but = document.createElement("button");
document.body.appendChild(but);
const svg = document.createElement("div");
document.body.appendChild(svg);
svg.classList.add("glist");
svg.innerHTML = `${carSVG(getRandomColorForCar())}`;

but.addEventListener("click", () => {
  // postData(car);
  upDateGarage();
  svg.innerHTML = `${carSVG(getRandomColorForCar())}`;
  // carsStorage.carsPage += 1;
  // carsStorage.cars.map((e) => deleteCar(e.id));
});

export const upDateGarage = async () => {
  const { items, carsCount } = await getCarsGarage(carsStorage.carsPage);
  carsStorage.cars = items;
  carsStorage.carsCount = carsCount;
  console.log(carsStorage.cars, carsStorage.carsCount);
};
// console.log(carsStorage.cars, carsStorage.carsCount);
