import updateLastArticles from "./last-articles";
import updateArticleList from "./article-list";
import updatePopularList from "./popular-list";
import handleCursorOverImg from "./cursor-over-img";
import handleModalMsg from "./handle-modal-msg";
import handleSubscribe from "./subscribe";
import policyModal from "./policy-modal";
import sendForm from "./send-form";
import confirmSubscription from "./confirm-subscription";
import navigation from "./navigation";

const reducer = (state, action) => {

  return {
    lastArticles: updateLastArticles(state, action),
    articleList: updateArticleList(state, action),
    popularList: updatePopularList(state, action),
    cursorOnImg: handleCursorOverImg(state, action),
    modalMsg: handleModalMsg(state, action),
    subscribe: handleSubscribe(state, action),
    policyModal: policyModal(state, action),
    sendForm: sendForm(state, action),
    confirmSubscription: confirmSubscription(state, action),
    navigation: navigation(state, action)
  };
};

export default reducer;