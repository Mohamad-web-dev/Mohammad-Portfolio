import { ErrorMessage, FastField } from "formik";
import React from "react";

const Input = ({name,t,placeholder,label,component,type="text"}) => {
  return (
    <>
      <label className="contact-form__label" htmlFor={name}>
        {label}
      </label>
      <FastField
        type={type}
        id={name}
        name={name}
        className="contact-form__input"
        placeholder={placeholder}
        component={component}
      />
      <ErrorMessage
        name={name}
        component="p"
        className="contact-form_danger"
      />
    </>
  );
};

export default Input;
