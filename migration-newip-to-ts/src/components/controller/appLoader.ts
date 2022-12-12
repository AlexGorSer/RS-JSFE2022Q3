import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.up.railway.app/', {
      apiKey: 'cae83f58930342f2b3b5f2e76849cadf', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
