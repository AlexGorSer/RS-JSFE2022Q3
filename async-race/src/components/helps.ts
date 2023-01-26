import {
  createWinner,
  deleteCar,
  driveCar,
  getCarsGarage,
  getEngine,
  postData,
  putData,
} from "../API/Api";
import carsStorage from "../carsStorage/carsStorage";
import { carsCard, pageButtons } from "./carsContained";
import { carSVG } from "./carSVG";
import { winnerCar } from "./Forms";
import { Root } from "./Root";

export const getRandomNumber = (max: number, min = 0) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getGarage = async () => {
  Root.root.innerHTML = "";
  const page = document.createElement("h2");
  Root.root.appendChild(page);
  page.innerText = `
  Cars Garage: ${carsStorage.carsCount} 
  ________________________________

  Page: ${carsStorage.carsPage}`;
  Root.root.insertAdjacentHTML("beforeend", pageButtons());

  carsStorage.cars.map(async (e) =>
    Root.root.insertAdjacentHTML(
      "beforeend",
      `${carsCard(e.name, carSVG(e.color, e.id), e.id)}`
    )
  );
};

export const getPages = async (target: HTMLElement) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const page = +carsStorage.carsCount! / 7;
  if (target.classList.contains("next")) {
    // console.log(Math.round(page));
    if (page > carsStorage.carsPage) {
      carsStorage.carsPage++;
      // console.log(carsStorage.carsPage);
      await getCarsGarage(carsStorage.carsPage);
      await upDateGarage();
      await getGarage();
    }
  }
  if (target.classList.contains("prev")) {
    // console.log(carsStorage.carsPage);
    if (1 < carsStorage.carsPage) {
      carsStorage.carsPage--;
      // console.log(carsStorage.carsPage);
      await getCarsGarage(carsStorage.carsPage);
      await upDateGarage();
      await getGarage();
    }
  }
};

export const clickCardButtons = async (event: Event) => {
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

    const ref = <HTMLFormElement>document.querySelector(".car-put-container");

    ref.text.value = carsStorage.selectCar.name;
    ref.color.value = carsStorage.selectCar.color;
    // console.log(carsStorage.selectCar);
  }

  if (target.classList.contains("cars-card-start")) {
    startCarAnimation(target.id);
  }

  if (target.classList.contains("cars-card-stope")) {
    resetCar(target.id);
  }
};
export const upDateGarage = async () => {
  const { items, carsCount } = await getCarsGarage(carsStorage.carsPage);
  carsStorage.cars = items;
  carsStorage.carsCount = carsCount;

  carsStorage.selectCar.id = 0;
  carsStorage.selectCar.name = "";
  carsStorage.selectCar.color = "";
  // console.log(carsStorage.cars, carsStorage.carsCount);
};

export const postCar = async (e: Event) => {
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
export const putCar = async (e: Event) => {
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

export const carAnimation = (
  carTarget: HTMLElement,
  distanceBetweenElem: number,
  time: number
) => {
  const target = carTarget;
  let start: number | null = null;
  const state = { id: 1 };

  const getStapes = (timeStep: number) => {
    if (!start) start = timeStep;
    const progress = timeStep - start;
    const stapes = Math.round(progress * (distanceBetweenElem / time));

    target.style.translate = `${Math.min(stapes, distanceBetweenElem)}px`;

    if (stapes < distanceBetweenElem) {
      state.id = window.requestAnimationFrame(getStapes);
    }
  };
  state.id = window.requestAnimationFrame(getStapes);

  return state;
};

export const getBetweenElement = (
  firstElem: HTMLElement,
  secondElem: HTMLElement
) => {
  const start =
    firstElem.getBoundingClientRect().x +
    firstElem.getBoundingClientRect().width / 2 -
    100;
  const finish =
    secondElem.getBoundingClientRect().x +
    secondElem.getBoundingClientRect().width / 2;

  return finish - start;
};

export const startCarAnimation = async (id: string) => {
  const { velocity, distance } = await getEngine(id, "started");
  const startButton = <HTMLFormElement>(
    document.querySelector(`.cars-card-start.id-${id}`)
  );
  const stopeButton = <HTMLFormElement>(
    document.querySelector(`.cars-card-stope.id-${id}`)
  );

  startButton.disabled = true;
  stopeButton.disabled = false;

  const time = Math.round(distance / velocity);

  const carSVGTarget = <HTMLElement>document.querySelector(`.car-${id}`);
  const finishElemFlag = <HTMLElement>document.querySelector(`.finish-${id}`);

  const distanceBetweenElem = getBetweenElement(carSVGTarget, finishElemFlag);

  carsStorage.animationStorageID[+id] = carAnimation(
    carSVGTarget,
    distanceBetweenElem,
    time
  );

  // console.log(distanceBetweenElem);
  // console.log(state);
  // console.log(velocity, distance);
  const { success } = await driveCar(id);
  // console.log(carsStorage.animationStorageID);

  if (!success) {
    window.cancelAnimationFrame(carsStorage.animationStorageID[+id].id);
    throw new Error("car is stope");
  }
  return { id, time };
};

export const startRace = async () => {
  const prom = Promise.any(
    carsStorage.cars.map(async (elem) => startCarAnimation(elem.id.toString()))
  );
  const winObj = {
    id: 0,
    time: 0,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    wins: 1,
  };
  await prom.then((elem) => {
    winObj.id = +elem.id;
    winObj.time = +(elem.time / 1000).toFixed(2);
  });
  // console.log(carsStorage.winners.find((elem) => winObj.id === elem.id)?.wins);
  const isWinner = carsStorage.cars.filter((elem) => elem.id === +winObj.id);
  // if (carsStorage.winners.includes(winObj)) console.log(true);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  Root.root.insertAdjacentHTML(
    "afterbegin",
    await winnerCar(isWinner[0], winObj)
  );
  await createWinner(winObj);
};

export const resetCar = async (id: string) => {
  const startButton = <HTMLFormElement>(
    document.querySelector(`.cars-card-start.id-${id}`)
  );
  const stopeButton = <HTMLFormElement>(
    document.querySelector(`.cars-card-stope.id-${id}`)
  );

  startButton.disabled = false;
  stopeButton.disabled = true;
  getEngine(id, "stopped");
  const carSVGTarget = <HTMLElement>document.querySelector(`.car-${id}`);
  window.cancelAnimationFrame(carsStorage.animationStorageID[+id].id);
  carSVGTarget.style.translate = `0px`;
};
