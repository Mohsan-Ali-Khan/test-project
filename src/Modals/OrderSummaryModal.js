import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HamburgerContext } from "../context/HamburgerContext";

import "./OrderSummaryModal.css";

function OrderSummaryModal({ setOpenModal }) {
  const { selectedIngredients, getCalculatedTotalPrice } =
    useContext(HamburgerContext);
  const navigate = useNavigate();

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Your Order Summary:</h1>
        </div>
        <div>
          {selectedIngredients.map((selectedIngredient) => {
            const list = (
              <>
                <ul>
                  <li
                    style={{ textAlign: "start", textTransform: "capitalize" }}
                  >
                    {selectedIngredient.name} {selectedIngredient.count}
                  </li>
                </ul>
              </>
            );
            return list;
          })}
          <h2 style={{ textAlign: "start", textTransform: "capitalize" }}>
            Total Price :<span>$ {getCalculatedTotalPrice()}</span>
          </h2>
          <h3>Continue to Checkout</h3>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={() => navigate("/order-completed")}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummaryModal;
