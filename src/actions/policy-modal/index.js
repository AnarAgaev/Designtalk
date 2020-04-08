import setCookiePolicyModal from "./set-cookie-policy-modal";
import visiblePolicyModal from "./show-policy-modal";

const hidePolicyModal = (dispatch) => {
  // Set policy cookie
  const name = 'policy';
  const value = 'true';
  const time = 60*60*24*365; // set cookie on a year
  document.cookie = encodeURIComponent(name)
    + '=' + encodeURIComponent(value)
    + '; path=/; max-age=' + time + 'secure';

  dispatch(setCookiePolicyModal());
};

const showPolicyModal = (dispatch) => {
  dispatch(visiblePolicyModal());
};

export {
  hidePolicyModal,
  showPolicyModal,
  setCookiePolicyModal
}