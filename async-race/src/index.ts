import { getCarsGarage, deleteCar, postData, putData } from "./API/Api";
import carsStorage from "./carsStorage/carsStorage";
import { carSVG, getRandomColorForCar } from "./components/carSVG";
import { carMarcs, carsCard } from "./components/carsContained";
import { Root } from "./components/Root";
import { forms } from "./components/Forms";
import { getRandomNumber } from "./components/helps";

import "./style.scss";

// const svg = document.createElement("div");
document.body.insertAdjacentHTML("beforeend", forms());
const but = document.createElement("button");
document.body.appendChild(but);
but.textContent = "random";
document.body.appendChild(Root.root);
Root.root.classList.add(Root.className);

but.addEventListener("click", async () => {
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

const getGarage = () => {
  Root.root.innerHTML = "";
  carsStorage.cars.map((e) =>
    Root.root.insertAdjacentHTML(
      "beforeend",
      `${carsCard(e.name, carSVG(e.color), e.id)}`
    )
  );
};
getGarage();

document
  .querySelector(".cars-container")
  ?.addEventListener("click", (e) => clickCardButtons(e));

const clickCardButtons = async (event: Event) => {
  const target = <HTMLElement>event.target;
  if (target.classList.contains("cars-card-remove")) {
    await deleteCar(+target.id);
    await upDateGarage();
    Root.root.innerHTML = "";
    getGarage();
  }

  if (target.classList.contains("cars-card-select")) {
    const foundCar = carsStorage.cars.filter((e) => e.id === +target.id);
    carsStorage.selectCar = foundCar[0];
    console.log(carsStorage.selectCar);
  }
};

export const upDateGarage = async () => {
  const { items, carsCount } = await getCarsGarage(carsStorage.carsPage);
  carsStorage.cars = items;
  carsStorage.carsCount = carsCount;
  console.log(carsStorage.cars, carsStorage.carsCount);
};

const postCar = async (e: Event) => {
  e.preventDefault();
  const ref = <HTMLFormElement>e.target;

  if (ref.text.value !== "") {
    const body = {
      name: ref.text.value,
      color: ref.color.value,
    };
    await postData(body);
    await upDateGarage();
    await getGarage();
  }

  ref.text.value = "";
  ref.color.value = "#000000";
};

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

const putCar = async (e: Event) => {
  e.preventDefault();
  const ref = <HTMLFormElement>e.target;
  // console.log(ref.text.value, ref.color.value);
  if (ref.text.value !== "") {
    const body = {
      name: ref.text.value,
      color: ref.color.value,
    };
    if (carsStorage.selectCar.id !== 0) {
      await putData(carsStorage.selectCar.id, body);
      await upDateGarage();
      await getGarage();
    }
  }
  carsStorage.selectCar.id = 0;
  carsStorage.selectCar.name = "";
  carsStorage.selectCar.color = "";
  ref.text.value = "";
  ref.color.value = "#000000";
};
