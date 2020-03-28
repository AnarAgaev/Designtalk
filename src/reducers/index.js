import updateArticleList from "./article-list";
import updatePopularList from "./popular-list";
import handleCursorOverImg from "./cursor-over-img";

const reducer = (state, action) => {

  return {
    articleList: updateArticleList(state, action),
    popularList: updatePopularList(state, action),
    cursorOnImg: handleCursorOverImg(state, action)
  };
};

export default reducer;