export interface IData {
  id: number;
  name: string;
  color: string;
}
export interface ICarsData {
  items: IData[];
  carsCount: string | null;
}

export type TBody = Omit<IData, "id">;
