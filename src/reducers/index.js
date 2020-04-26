import updateLastArticles from "./last-articles";
import updateArticleList from "./article-list";
import updatePopularList from "./popular-list";
import updateCursor from "./cursor-over-img";
import handleModalMsg from "./handle-modal-msg";
import policyModal from "./policy-modal";
import sendForm from "./send-form";
import confirmSubscription from "./confirm-subscription";
import updateNavigation from "./update-navigation";
import updateLastRubricArticle from "./last-rubric-article";
import updateRubricArticleList from "./rubric-article-list";
import updateArticle from "./article";
import updateLastRubricArticleList from "./last-rubric-article-list";

const reducer = (state, action) => {

  return {
    lastArticles: updateLastArticles(state, action),
    articleList: updateArticleList(state, action),
    popularList: updatePopularList(state, action),
    cursorOnImg: updateCursor(state, action),
    modalMsg: handleModalMsg(state, action),
    policyModal: policyModal(state, action),
    sendForm: sendForm(state, action),
    confirmSubscription: confirmSubscription(state, action),
    navigation: updateNavigation(state, action),
    lastRubricArticle: updateLastRubricArticle(state, action),
    rubricArticleList: updateRubricArticleList(state, action),
    article: updateArticle(state, action),
    lastRubricArticleList: updateLastRubricArticleList(state, action)
  };
};

export default reducer;