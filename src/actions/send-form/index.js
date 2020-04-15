import sendFormRequest from "./send-form-request";
import sendFormResult from "./send-form-result";
import { modalMsgShow } from "../modal-msg";

const sendForm = (
    dispatch,
    blogService,
    data,
    url,
    successMessage,
    failureMessage
  ) => {

  dispatch(sendFormRequest());

  blogService.sendForm(url, data)
    .then((response) => {
      dispatch(sendFormResult());

      response.status
        ? dispatch(modalMsgShow(successMessage))
        : dispatch(modalMsgShow(failureMessage));
    })
    .catch((error) => {
      console.log(error);

      dispatch(sendFormResult());
      dispatch(modalMsgShow(failureMessage));
    });
};

export default sendForm;