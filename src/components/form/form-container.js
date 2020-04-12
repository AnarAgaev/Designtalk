import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { getFormControl } from "../../utils";
import { sendForm } from "../../actions";
import { compose } from "../../utils";
import withBlogService from "../hoc";
import Form from "./form";
import "./form.scss";

const FromContainer = (props) => {

  const {
    register, handleSubmit,
    errors } = useForm();

  const {
    sendForm, url, successMessage,
    failureMessage,  ...controls
  } = props;

  const onSubmit = (data) => sendForm(
    data, url,
    successMessage,
    failureMessage
  );

  let formControls = [];

  for (let control in controls) {
    formControls.push(
      getFormControl(
        control,
        register,
        errors,
        controls[control].required
      )
    );
  }

  return (
    <Form
      onSubmit={ handleSubmit(onSubmit) }
      controls={ formControls } />
  );
};

const mapDispatchToProps = (dispatch, { blogService }) => {
  return {
    sendForm: (data, url, successMessage, failureMessage) =>
      sendForm(
        dispatch, blogService,
        data, url, successMessage,
        failureMessage
      )
  };
};

export default compose(
  withBlogService(),
  connect(
    undefined,
    mapDispatchToProps
  )
)(FromContainer);