import { objectToFormData } from "../utils";

export default class BlogService {
  _apiBase = 'https://spacebuilder.ru';

  _normalizeArticle = (article) => {
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

  getResource = async (url, data) => {

    const response = (data === undefined)
      ? await fetch(`${this._apiBase}${url}`)
      : await fetch(`${this._apiBase}${url}`, {
          method: 'POST',
          cache  : 'no-cache',
          body: objectToFormData(data)
        });

    if (!response.ok) {
      throw new Error(`Could not fetch data from ${url}, received ${response.status}`);
    }

    try {
      return await response.json();
    } catch (error) {
      throw new TypeError(`Received data must be a JSON. An error occurred on URL: ${response.url}`);
    }
  };

  getArticles = async (url) => {
    const articles = await this.getResource(url);

    articles.results.map(article => this._normalizeArticle(article));
    return articles;
  };

  sendForm = async (url, data) => {
    return await this.getResource(url, data);
  };
}