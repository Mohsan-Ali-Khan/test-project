import React from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { validateContactForm } from "../../utils/validationSchema";
import { App_Routes } from "../../constants/Routes";
import { TextField } from "./TextField";

import "./ContactForm.css";

export const ContactForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        name: "",
        street: "",
        zipCode: "",
        country: "",
        email: "",
      }}
      validationSchema={validateContactForm}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div className="contactFormWrapper">
          <h1>Enter your Contact Data</h1>
          <Form>
            <TextField name="name" type="text" />
            <TextField name="street" type="text" />
            <TextField name="zipCode" type="number" />
            <TextField name="country" type="text" />
            <TextField name="email" type="email" />
            <button
              className="OrderButton"
              type="submit"
              onClick={() => navigate(`${App_Routes.HOME}`)}
            >
              Order
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
