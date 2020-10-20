// ! React library import

import React from "react";

// ! Components import

import NavSlider from "./Components/NavSlider";
import MidSection from "./Components/MidSection";
import Analytics from "./Components/Analytics";

// ! Styles import
import "./Components/styles/app.scss";

// ! App component
function App() {
  return (
    <div className="App">
      <div className="dashboard-layout">
        {/* NAV SLIDER */}
        <NavSlider />
        {/* Mid section with tasks and interactions */}
        <MidSection />
        {/* ANALYTICS */}
        <Analytics />
      </div>
    </div>
  );
}

export default App;
