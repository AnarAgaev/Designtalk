import cursorOverImg from "./cursor-over-img";
import { fetchArticles } from "./fetch-articles";
import { showArticleItem } from "./fetch-articles";
import fetchArticlesFailure from "./fetch-articles/fetch-articles-failure";
import fetchPopular from './fetch-popular';
import fetchPopularFailure from "./fetch-popular/fetch-popular-failure";
import popularSlide from "./popular-slide";
import fetchLastArticles from "./fetch-last-articles";
import fetchLastArticlesFailure from "./fetch-last-articles/fetch-last-articles-failure";
import handleTitleHover from "./handle-title-hover";
import sendForm from "./send-form";
import { modalMsgShow, modalMsgHide } from "./modal-msg";
import { hidePolicyModal, showPolicyModal, setCookiePolicyModal } from "./policy-modal";
import confirmSubscription from "./confirm-subscription";
import handleNavClick from "./handle-nav-click"

export {
  fetchArticles,
  showArticleItem,
  fetchArticlesFailure,
  fetchPopular,
  fetchPopularFailure,
  cursorOverImg,
  popularSlide,
  fetchLastArticles,
  fetchLastArticlesFailure,
  handleTitleHover,
  modalMsgShow,
  modalMsgHide,
  hidePolicyModal,
  showPolicyModal,
  setCookiePolicyModal,
  sendForm,
  confirmSubscription,
  handleNavClick
};