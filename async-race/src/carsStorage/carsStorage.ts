import { getCarsGarage } from "../API/Api";
const { items: cars, carsCount: carsCount } = await getCarsGarage(1);

export default {
  carsPage: 1,
  cars,
  carsCount,
};
