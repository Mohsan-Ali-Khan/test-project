import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

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
      <button className="BurgerBuilder" onClick={() => navigate("/home")}>
        Burger Builder
      </button>

      <button className="LoginButton" onClick={() => navigate("/login")}>
        Login
      </button>
      <button className="LoginButton" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
