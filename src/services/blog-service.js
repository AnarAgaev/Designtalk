export default class BlogService {

  // _apiBase = 'https://swapi.co/api';
  _apiBase = 'https://spacebuilder.ru';

  async getResource(url) {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }

    return await response.json();
  }

  async getAllArticles() {
    return await this.getResource(`/articles/`);
  }

  async getArticle(name = null) {
    return await this.getResource(`/articles/?name=${name}`);
  }

}