import { getCarsGarage, deleteCar, postData, putData } from "./API/Api";
import carsStorage from "./carsStorage/carsStorage";
import { carSVG, getRandomColorForCar } from "./components/carSVG";
import { carMarcs, carsCard, pageButtons } from "./components/carsContained";
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
  const page = document.createElement("h2");
  Root.root.appendChild(page);
  page.innerText = `
  Cars Garage: ${carsStorage.carsCount} 
  ________________________________

  Page: ${carsStorage.carsPage}`;
  Root.root.insertAdjacentHTML("beforeend", pageButtons());
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
  ?.addEventListener("click", async (e) => {
    const target = <HTMLElement>e.target;
    await getPages(target);
    await clickCardButtons(e);
  });
alert(
  "Привет, можете проверить в последний день дедлайна? Мне осталось  немного, заранее спасибо!"
);
const getPages = async (target: HTMLElement) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const page = +carsStorage.carsCount! / 7;
  if (target.classList.contains("next")) {
    console.log(Math.round(page));
    if (page > carsStorage.carsPage) {
      carsStorage.carsPage++;
      console.log(carsStorage.carsPage);
      await getCarsGarage(carsStorage.carsPage);
      await upDateGarage();
      await getGarage();
    }
  }
  if (target.classList.contains("prev")) {
    console.log(carsStorage.carsPage);
    if (1 < carsStorage.carsPage) {
      carsStorage.carsPage--;
      console.log(carsStorage.carsPage);
      await getCarsGarage(carsStorage.carsPage);
      await upDateGarage();
      await getGarage();
    }
  }
};

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

  carsStorage.selectCar.id = 0;
  carsStorage.selectCar.name = "";
  carsStorage.selectCar.color = "";
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
  ref.text.value = "";
  ref.color.value = "#000000";
};
