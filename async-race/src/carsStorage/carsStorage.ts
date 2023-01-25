import { getCarsGarage } from "../API/Api";
const { items: cars, carsCount: carsCount } = await getCarsGarage(1);

const animation: { [key: number]: { id: number } } = {};

export default {
  carsPage: 1,
  cars,
  carsCount,
  selectCar: {
    id: 0,
    name: "",
    color: "",
  },
  animation,
};
