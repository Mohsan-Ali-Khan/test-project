import React from "react";
import BurgerLogo from "../../assets/Images/burger-logo.png";

import "./logo.css";

export function Logo(props) {
  return (
    <div className="LogoImg">
      <img src={BurgerLogo} alt="Greenland logo" />
    </div>
  );
}
