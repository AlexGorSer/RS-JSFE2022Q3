import { getCarsGarage, getWinners, getAllCar } from "../API/Api";
const { items: cars, carsCount: carsCount } = await getCarsGarage(1);

const { items: winners, winnersCount: winnersCount } = await getWinners(1);
const { item: allCars } = await getAllCar();

const animationStorageID: { [key: number]: { id: number } } = {};

export default {
  carsPage: 1,
  cars,
  carsCount,
  selectCar: {
    id: 0,
    name: "",
    color: "",
  },
  animationStorageID,
  winners,
  winnersCount,
  winnersPages: 1,
  allCars,
  sortby: "null",
  order: "null",
};
