export default class BlogService {
  _apiBase = 'https://spacebuilder.ru';

  _transformArticle = (article) => {
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
      picture: article.picture,
      visits: article.visits
    };
  };

  getResource = async (url) => {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    return await response.json();
  };

  getArticles = async (url) => {
    const articles = await this.getResource(url);

    articles.results.map(article => this._transformArticle(article));
    return articles;
  };

  getArticle = async (name = null) => {
    const article = await this.getResource(`/articles/?name=${name}`);
    return this._transformArticle(article);
  };
}