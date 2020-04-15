import React from "react";
import {
  Email, Message,
  Name, Phone, Author,
  Site, SocialPages, Photo,
  ObjectPhotos, Published,
  Photographer, Stylist,
  DateFinish, City, Area,
  Things, Description
} from "../components/form-controls";

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

    case 'author':
      return (
        <Author
          key={ control }
          errors={ errors }
          register={ register }
          required={ required } />
      );

    case 'site':
      return (
        <Site
          key={ control }
          errors={ errors }
          register={ register }
          required={ required } />
      );

    case 'socials':
      return (
        <SocialPages
          key={ control }
          errors={ errors }
          register={ register }
          required={ required } />
      );

    case 'photo':
      return (
        <Photo
          key={ control }
          errors={ errors }
          register={ register }
          required={ required } />
      );

    case 'objectphotos':
      return (
        <ObjectPhotos
          key={ control }
          errors={ errors }
          register={ register }
          required={ required } />
      );

    case 'published':
      return (
        <Published
          key={ control }
          errors={ errors }
          register={ register }
          required={ required } />
      );

    case 'photographer':
      return (
        <Photographer
          key={ control }
          errors={ errors }
          register={ register }
          required={ required } />
      );

    case 'stylist':
      return (
        <Stylist
          key={ control }
          errors={ errors }
          register={ register }
          required={ required } />
      );

    case 'datefinish':
      return (
        <DateFinish
          key={ control }
          errors={ errors }
          register={ register }
          required={ required } />
      );

    case 'city':
      return (
        <City
          key={ control }
          errors={ errors }
          register={ register }
          required={ required } />
      );

    case 'area':
      return (
        <Area
          key={ control }
          errors={ errors }
          register={ register }
          required={ required } />
      );

    case 'things':
      return (
        <Things
          key={ control }
          errors={ errors }
          register={ register }
          required={ required } />
      );

    case 'description':
      return (
        <Description
          key={ control }
          errors={ errors }
          register={ register }
          required={ required } />
      );

    default:
      return;
  }
};

export default getFormControls;