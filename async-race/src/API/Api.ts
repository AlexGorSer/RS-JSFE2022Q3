import { ICarsData } from "../types/interface";

const URL = "http://127.0.0.1:3000";

export const PATH = {
  garage: "/garage",
  engine: "/engine",
};

export const getCarsGarage = async (page: number, limit = 7) => {
  const res = await fetch(`${URL}${PATH.garage}?_page=${page}&_limit=${limit}`);
  const carsData: ICarsData = {
    items: await res.json(),
    carsCount: res.headers.get("X-Total-Count"),
  };
  return carsData;
};

interface IBody {
  name: string;
  color: string;
}

export const postData = async (body: IBody) => {
  await fetch(`${URL}${PATH.garage}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const deleteCar = async (id: number) => {
  await fetch(`${URL}${PATH.garage}/${id}`, {
    method: "DELETE",
  });
};
