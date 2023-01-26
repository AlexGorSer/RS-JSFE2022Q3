import {
  ICarsData,
  IWinData,
  IWinners,
  IWinnersData,
  TBody,
} from "../types/interface";

const URL = "http://127.0.0.1:3000";

export const PATH = {
  garage: "/garage",
  engine: "/engine",
  winners: "/winners",
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

export const getEngine = async (id: string, status: string) => {
  const response = await fetch(
    `${URL}${PATH.engine}?id=${id}&status=${status}`,
    {
      method: "PATCH",
    }
  );

  return response.json();
};

export const driveCar = async (id: string) => {
  const response = await fetch(`${URL}${PATH.engine}?id=${id}&status=drive`, {
    method: "PATCH",
  });
  return response.status !== 200
    ? { success: false }
    : { ...(await response.json()) };
};

export const getWinners = async (
  page: number,
  limit = 10,
  sort = "null",
  order = "null"
) => {
  const response = await fetch(
    `${URL}${PATH.winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
  );
  const winner: IWinners = {
    items: await response.json(),
    winnersCount: response.headers.get("X-Total-Count"),
  };

  return winner;
};

export const createWinner = async (body: IWinnersData) => {
  await fetch(`${URL}${PATH.winners}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const updateWinners = async (body: IWinnersData, id: number) => {
  await fetch(`${URL}${PATH.winners}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const deletedWinner = async (id: string) => {
  await fetch(`${URL}${PATH.winners}/${id}`, {
    method: "DELETE",
  });
};

export const getAllCar = async () => {
  const res = await fetch(`${URL}${PATH.garage}`);
  const winnersData: IWinData = {
    item: await res.json(),
  };

  return winnersData;
};
