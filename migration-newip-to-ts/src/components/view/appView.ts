import News, { Articles } from './news/news';
import Sources, { SourcesData } from './sources/sources';

export interface App {
  // status: string;
  // totalResults: number;
  articles?: Articles[];
  sources?: SourcesData[];

}

export class AppView {
  news: News;
  sources: Sources;
  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: App) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: App) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
