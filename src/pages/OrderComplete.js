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
<div>
      <h1>We hope it tastes well!</h1>

<Burger />

      <div>

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

      {!hidden ? <ContactForm /> : null}

      </div>
    </>
  );
}

export default OrderComplete;
