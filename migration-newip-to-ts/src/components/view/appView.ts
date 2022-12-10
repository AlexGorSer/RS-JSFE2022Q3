import News, { Articles } from './news/news';
import Sources, { SourcesData } from './sources/sources';

interface App {
  readonly status: string;
  readonly totalResults: number;
  readonly articles: Articles[];
  readonly sources: SourcesData[];
}

export class AppView {
  readonly news: News;
  readonly sources: Sources;
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
