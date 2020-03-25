import updateArticleList from "./article-list";
import handleCursorOverImg from "./cursor-over-img";

const reducer = (state, action) => {

  return {
    articleList: updateArticleList(state, action),
    cursorOnImg: handleCursorOverImg(state, action)
  };
};

export default reducer;