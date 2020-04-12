import sendFormRequest from "./send-form-result";
import sendFormResult from "./send-form-request";
import { modalMsgShow } from "../modal-msg";

const sendForm = (dispatch, blogService, data, url, successMessage, failureMessage) => {

  dispatch(sendFormRequest());

  blogService.sendForm(url, data)
    .then((response) => {
      if (response) {
        dispatch(sendFormResult());
        dispatch(modalMsgShow(successMessage));
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch(sendFormResult());
      dispatch(modalMsgShow(failureMessage));
    });

};

export default sendForm;