import updateLastArticles from "./last-articles";
import updateArticleList from "./article-list";
import updatePopularList from "./popular-list";
import handleCursorOverImg from "./cursor-over-img";
import handleModalMsg from "./handle-modal-msg";
import handleSubscribe from "./subscribe";

const reducer = (state, action) => {

  return {
    lastArticles: updateLastArticles(state, action),
    articleList: updateArticleList(state, action),
    popularList: updatePopularList(state, action),
    cursorOnImg: handleCursorOverImg(state, action),
    modalMsg: handleModalMsg(state, action),
    subscribe: handleSubscribe(state, action)
  };
};

export default reducer;