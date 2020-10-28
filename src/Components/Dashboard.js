import React from "react";
import NavSlider from "./NavSlider";
import MidSection from "./MidSection";
import Analytics from "./Analytics";

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      {/* NAV SLIDER */}
      <NavSlider />
      {/* Mid section with tasks and interactions */}
      <MidSection />
      {/* ANALYTICS */}
      <Analytics />
      
    </div>
  );
};

export default Dashboard;
