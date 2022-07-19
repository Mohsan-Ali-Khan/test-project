import React from "react";

import "./BurgerIngredient.css";

const BurgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "meat":
      ingredient = <div className="meat"></div>;
      break;
    case "lettuce":
      ingredient = <div className="lettuce"></div>;
      break;
    case "bacon":
        ingredient = <div className="bacon"></div>;
        break;
    case "cheese":
      ingredient = <div className="cheese"></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default BurgerIngredient;
