import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            label: "Calories Burnt",
            data: [100, 200, 300, 250, 600, 150, 900],
            backgroundColor: "rgba(72, 239, 99,0.6)",
          },
          {
            label: "Calories Consumed",
            data: [50, 250, 700, 650, 900, 170, 450],
            backgroundColor: "#0b5563",
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="graph-chart-container">
        <Line data={this.state.chartData} />
      </div>
    );
  }
}

export default Chart;
