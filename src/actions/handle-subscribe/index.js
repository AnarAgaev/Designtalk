import onInputChange from "./onInputChange";
import { modalMsgShow } from "../modal-msg";

const handleInputChange = (dispatch, event) => {
  const email = event.target.value;
  const regular = /.+@.+\..+/i;

  regular.test(email) ?
    dispatch(onInputChange(email, false)) :
    dispatch(onInputChange(email, true));
};

const handleInputBlur = (dispatch, email) => {

  if (email === '') {
    dispatch(onInputChange('', false));
  }
};

const handleFormSubmit = (dispatch, event, email, error) => {
  event.preventDefault();

  if (!error && email !== '') {
    dispatch(modalMsgShow('Спасибо за подписку на наши новости! Будет много инетересного.'));
    dispatch(onInputChange('', false));
  } //else this.textInput.current.focus();
};

export {
  handleInputChange,
  handleInputBlur,
  handleFormSubmit
}