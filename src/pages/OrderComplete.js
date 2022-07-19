import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Burger from "../components/Burger/Burger";
import { ContactForm } from "../components/ContactForm/ContactForm";

import "./commonStyles.css";

function OrderComplete() {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <div className="OrderCompleteWrapper">
        <h1>We hope it tastes well!</h1>
        <Burger />
        <div className="OrderCompleteButtonsWrapper">
          <button className="cancelButton" onClick={() => navigate("/home")}>
            Cancel
          </button>
          <button
            className=" ContinueButton"
            onClick={() => setHidden((s) => !s)}
          >
            Continue
          </button>
        </div>
        <div className="OrderCompleteContactForm">
          {!hidden ? <ContactForm /> : null}
        </div>
      </div>
    </>
  );
}

export default OrderComplete;
