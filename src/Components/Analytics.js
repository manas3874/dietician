import React from "react";
import AnalyticsChart from "./AnalyticsChart";
import userPhoto from "../assets/images/sattva-3.jpg";
var Analytics = () => {
  return (
    <div className="analytics-section-container">
      <div className="user-image">
        <img src={userPhoto} alt="" />
      </div>
      <div className="analytics-card">
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <AnalyticsChart className="analytics-chart" />
      </div>
    </div>
  );
};

export default Analytics;
