import React from "react";
import { Email, Message, Name, Phone } from "../components/form-controls";

const getFormControls = (control, register, errors, required) => {
  switch (control.toLowerCase()) {
    case 'name':
      return (
        <Name
          key={ control }
          errors={ errors }
          register={ register }
          required={ required } />
      );

    case 'email':
      return (
        <Email
          key={ control }
          errors={ errors }
          register={ register }
          required={ required } />
      );

    case 'phone':
      return (
        <Phone
          key={ control }
          errors={ errors }
          register={ register }
          required={ required } />
      );

    case 'message':
      return (
        <Message
          key={ control }
          errors={ errors }
          register={ register }
          required={ required } />
      );
  }
};

export default getFormControls;