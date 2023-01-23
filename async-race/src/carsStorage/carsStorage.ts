import { getCarsGarage } from "../API/Api";
// import { IData } from "../types/interface";
const { items: cars, carsCount: carsCount } = await getCarsGarage(1);
// interface ICarsCount {
//   carsPage: number;
//   cars: IData[];
//   carsCount: number | null;
//   selectCar: {
//     id: number;
//     name: string;
//     color: string;
//   };
// }
export default {
  carsPage: 1,
  cars,
  carsCount,
  selectCar: {
    id: 0,
    name: "",
    color: "",
  },
};
