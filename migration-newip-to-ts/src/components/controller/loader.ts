import { IResp } from "../interface";
import { OptionsObj } from "../interface";
import { TCallback } from "../interface";



// type TCallback = (data: App) => void;

class Loader {
  baseLink: string;
  options: OptionsObj;

  constructor(baseLink: string, options: OptionsObj) {
    this.baseLink = baseLink;
    this.options = options;
  }


  getResp(
    { endpoint, options = {} }: IResp,
    callback: TCallback = () => {
      console.error('No callback for GET response');
    },
  ) {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) { console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`); }
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: OptionsObj, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: TCallback, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
