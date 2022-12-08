import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://127.0.0.1:8075/', {
      apiKey: 'cae83f58930342f2b3b5f2e76849cadf', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
