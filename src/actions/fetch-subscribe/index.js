import onInputChange from "./onInputChange";
import { modalMsgShow } from "../modal-msg";
import fetchSubscribeRequest from "./fetch-subscribe-request";
import fetchSubscribeSuccess from "./fetch-subscribe-success";
import fetchSubscribeFailure from "./fetch-subscribe-failure";

const handleInputChange = (dispatch, event) => {
  const email = event.target.value;
  const regular = /.+@.+\..+/i;

  regular.test(email)
    ? dispatch(onInputChange(email, false))
    : dispatch(onInputChange(email, true));
};

const handleInputBlur = (dispatch, email) => {
  if (email === '') {
    dispatch(onInputChange('', false));
  }
};

const handleFormSubmit = (dispatch, blogService, event, email, error, input) => {
  event.preventDefault();

  if (!error && email !== '') {

    dispatch(fetchSubscribeRequest());

    blogService.signMail('/scripts/sign-mail.php', { email: email })
      .then((response) => {
        if (response) {
          input.current.blur();
          dispatch(modalMsgShow('Спасибо за подписку на наши новости! Будет много инетересного.'));
          dispatch(onInputChange('', false));
          dispatch(fetchSubscribeSuccess());
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(modalMsgShow('К сожалению, не получилось оформить подписку на новости. Попробуйте немного позже.'));
        dispatch(fetchSubscribeFailure());
      });
  } else input.current.focus();
};

export {
  handleInputChange,
  handleInputBlur,
  handleFormSubmit
}