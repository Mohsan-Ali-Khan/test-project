import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { App_Routes } from "../../constants/Routes";

import "./commonStyles.css";

export function Accessibility() {
  let navigate = useNavigate();
  const { logOut } = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="AccessibilityContainer">
      <button
        className="BurgerBuilder"
        onClick={() => navigate(`${App_Routes.HOME}`)}
      >
        Burger Builder
      </button>

      <button
        className="LoginButton"
        onClick={() => navigate(`${App_Routes.LOGIN}`)}
      >
        Login
      </button>
      <button className="LoginButton" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
