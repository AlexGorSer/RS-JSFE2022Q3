export type TOptionsObj = { [key: string]: string };

export type TCallback = (data: IApp) => void;

export interface IResp {
  endpoint: string;
  options?: { sources?: string };
}

export interface IArticles {
  source: {
    name: string;
  },
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export interface ISourcesData {
  id: string;
  name: string;
}

export interface IApp {
  articles?: IArticles[];
  sources?: ISourcesData[];

}

export enum ECodeStatus {
  Unauthorized = 401,
  NotFound = 404,
}
