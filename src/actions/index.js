import cursorOverImg from "./cursor-over-img";
import fetchArticles from "./fetch-articles";
import fetchArticlesFailure from "./fetch-articles/fetch-articles-failure";
import fetchPopular from './fetch-popular';
import fetchPopularFailure from "./fetch-popular/fetch-popular-failure";
import popularSlide from "./popular-slide";
import fetchLastArticles from "./fetch-last-articles";
import fetchLastArticlesFailure from "./fetch-last-articles/fetch-last-articles-failure";
import fetchSubscribeFailure from "./fetch-subscribe/fetch-subscribe-failure";
import handleTitleHover from "./handle-title-hover";
import headerScrollProcessing from "./handle-header";
import showHeader from "./handle-header/show-header";
import sendForm from "./send-form";
import { modalMsgShow, modalMsgHide } from "./modal-msg";
import { handleInputChange, handleInputBlur, handleFormSubmit } from './fetch-subscribe';
import { hidePolicyModal, showPolicyModal, setCookiePolicyModal } from "./policy-modal";
import confirmSubscription from "./confirm-subscription";
import handleNavClick from "./handle-nav-click"

export {
  fetchArticles,
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
  handleInputChange,
  handleInputBlur,
  handleFormSubmit,
  headerScrollProcessing,
  showHeader,
  fetchSubscribeFailure,
  hidePolicyModal,
  showPolicyModal,
  setCookiePolicyModal,
  sendForm,
  confirmSubscription,
  handleNavClick
};