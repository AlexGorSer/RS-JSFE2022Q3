import { ICarsData, TBody } from "../types/interface";

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

export const postData = async (body: TBody) => {
  await fetch(`${URL}${PATH.garage}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const deleteCar = async (id: number) => {
  const resp = await fetch(`${URL}${PATH.garage}/${id}`, {
    method: "DELETE",
  });
  resp.status === 200
    ? console.log("Car DELETED")
    : console.error(new Error("Fast click"));
};

export const putData = async (id: number, body: TBody) => {
  await fetch(`${URL}${PATH.garage}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
