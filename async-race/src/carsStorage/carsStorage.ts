import { getCarsGarage } from "../API/Api";
const { items: cars, carsCount: carsCount } = await getCarsGarage(1);

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
};
