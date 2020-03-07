export default class BlogService {
  _apiBase = 'https://spacebuilder.ru';

  _transformArticle(article) {
    return {
      id: article.id,
      url: article.url,
      rubric: {
        id: article.rubric.id,
        link: article.rubric.link,
        name: article.rubric.name
      },
      title: article.title,
      preview: article.preview,
      picture: article.picture
    };
  };

  async getResource(url) {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    return await response.json();
  }

  async getArticles(count = false) {
    const url = count ?
      `/articles/?count=${count}` :
      `/articles/`;
    const articles = await this.getResource(url);

    articles.results.map(article => this._transformArticle(article));
    return articles;
  }

  async getArticle(name = null) {
    const article = await this.getResource(`/articles/?name=${name}`);
    return this._transformArticle(article);
  }
}