export type OptionsObj = { [key: string]: string };

export type TCallback = (data: App) => void;

export interface IResp {
  endpoint: string;
  options?: { sources?: string };
}

export interface Articles {
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

export interface SourcesData {
  id: string;
  name: string;
}

export interface App {
  articles?: Articles[];
  sources?: SourcesData[];

}
