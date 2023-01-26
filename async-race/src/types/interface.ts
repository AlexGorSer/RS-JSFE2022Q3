export interface IData {
  id: number;
  name: string;
  color: string;
}
export interface ICarsData {
  items: IData[];
  carsCount: string | null;
}
export interface IWinnersData {
  id: number;
  wins: number;
  time: number;
}
export interface IWinners {
  items: IWinnersData[];
  winnersCount: string | null;
}
export type TBody = Omit<IData, "id">;
