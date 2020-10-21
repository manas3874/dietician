import React from "react";
import GraphChart from "./GraphChart";
import FoodLink from "./FoodLink";
var Interaction = () => {
  return (
    <div className="interaction-section-container">
      <div className="interaction-grid-top">
        <GraphChart />
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
        <FoodLink attr="1" />
        <FoodLink attr="2" />
        <FoodLink attr="3" />
        <FoodLink attr="4" />
      </div>
    </div>
  );
};

export default Interaction;
