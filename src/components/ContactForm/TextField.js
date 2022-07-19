import React from "react";
import { ErrorMessage, useField } from "formik";

import "./ContactForm.css";

export const TextField = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div>
      <input
        placeholder={field.name}
        className="textFields"
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
