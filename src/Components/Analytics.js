import React from "react";
import AnalyticsChart from "./AnalyticsChart";
var Analytics = () => {
  return (
    <div className="analytics-section-container">
      <div className="user-image">
        <p>user image</p>
      </div>
      <div className="analytics-card">
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <AnalyticsChart />
      </div>
    </div>
  );
};

export default Analytics;
