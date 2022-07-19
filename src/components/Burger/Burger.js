import React, { useContext } from "react";
import { HamburgerContext } from "../../context/HamburgerContext";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";

import "./Burger.css";

const Burger = () => {
  const { selectedIngredients } = useContext(HamburgerContext);

  return (
    <div className="burgerWrapper">
      <div className="breadTop">
        <div className="seeds"></div>
        <div className="seeds2"></div>
      </div>
      {selectedIngredients.length !== 0 ? (
        selectedIngredients.map((item) => {
          const ingredientArr = Array(item.count).fill(
            <BurgerIngredient type={item.name} />
          );
          return ingredientArr.map((item) => item);
        })
      ) : (
        <h2>No Ingredients Added</h2>
      )}

      <div className="bread-bottom"></div>
    </div>
  );
};

export default Burger;
