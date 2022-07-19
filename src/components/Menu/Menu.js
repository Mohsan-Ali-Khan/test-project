import React, { useContext } from "react";
import { HamburgerContext } from "../../context/HamburgerContext";
import { useUserAuth } from "../../context/UserAuthContext";
import ingredients from "../../ingredients";

import "./Menu.css";

const Menu = ({ setOpenModal }) => {
  const {
    setSelectedIngredients,
    selectedIngredients,
    getCalculatedTotalPrice,
  } = useContext(HamburgerContext);

  const { user } = useUserAuth();

  const handleAddIngredient = (ingredient) => {
    const ingredients = [...selectedIngredients];

    const existIngredient = ingredients.find(
      (item) => item.name === ingredient.name
    );

    if (existIngredient) {
      existIngredient.count += 1;
    } else {
      ingredients.push({ ...ingredient, count: 1 });
    }

    setSelectedIngredients(ingredients);
  };

  const handleRemoveIngredient = (ingredient) => {
    let ingredients = [...selectedIngredients];

    const existIngredient = ingredients.find(
      (item) => item.name === ingredient.name
    );

    if (existIngredient) {
      if (existIngredient.count > 1) {
        existIngredient.count -= 1;
      } else {
        ingredients = ingredients.filter(
          (item) => item.name !== existIngredient.name
        );
      }
    }

    setSelectedIngredients(ingredients);
  };

  return (
    <div className="menu">
      <div className="content">
        <div className="current-price">
          Current Price: <span>$ {getCalculatedTotalPrice()}</span>
        </div>

        {Object.keys(ingredients).map((name, index) => (
          <div className="menu-items" key={index}>
            <div className="product-name">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </div>
            <div className="price"> $ {ingredients[name]} </div>
            <button
              className="menu-button decrement"
              decrement
              onClick={() =>
                handleRemoveIngredient({ name, price: ingredients[name] })
              }
            >
              Less
            </button>
            <div className="qty">
              {selectedIngredients.find((item) => item.name === name)?.count ||
                0}
            </div>
            <button
              className="menu-button increment"
              increment
              onClick={() =>
                handleAddIngredient({ name, price: ingredients[name] })
              }
            >
              More
            </button>
          </div>
        ))}
        {user ? (
          <div className="button-group">
            <button
              className="btn btn1"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              {" "}
              Order Now
            </button>
          </div>
        ) : (
          <div className="button-group">
            <button className="btn btn1"> Signup to order</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
