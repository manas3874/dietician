import React from "react";
import Chart from "./GraphChart";
import FoodLink from "./FoodLink";
var Interaction = () => {
  return (
    <div className="interaction-section-container">
      <div className="interaction-grid-top">
        <Chart />
        <div className="user-calorie-status">
          <div>
            <p>Calories taken</p>
            <p>Calories burnt</p>
          </div>
          <div>
            <p>steps taken</p>
            <p>current BMR</p>
          </div>
        </div>
      </div>
      <div className="interaction-grid-bottom">
        <FoodLink attr="0" name="Sandwich" />
        <FoodLink attr="1" name="Pizza" />
        <FoodLink attr="2" name="Burger" />
        <FoodLink attr="3" name="Milkshake" />
      </div>
    </div>
  );
};

export default Interaction;
