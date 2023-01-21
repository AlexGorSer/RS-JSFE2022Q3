import { getCarsGarage, postData } from "./API/Api";
import carsStorage from "./carsStorage/carsStorage";

import "./style.scss";

const randomColor = Math.floor(Math.random() * 16777215).toString(16);

const car = {
  name: "Teals",
  color: `#${randomColor}`,
};

const but = document.createElement("button");
document.body.appendChild(but);

but.addEventListener("click", () => {
  postData(car);
  up();
});
const up = async () => {
  const { items, carsCount } = await getCarsGarage(1);
  carsStorage.cars = items;
  carsStorage.carsCount = carsCount;
  console.log(carsStorage.cars, carsStorage.carsCount);
};
console.log(carsStorage.cars, carsStorage.carsCount);
