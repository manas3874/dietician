import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class AnalyticsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["John", "Stephan", "harold", "Jimmy"],
        datasets: [
          {
            label: "Leaderboard",
            data: [120, 200, 300, 250],
            backgroundColor: "rgba(72, 239, 99,0.6)",
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <Bar data={this.state.chartData} height="260" width="200" />
      </div>
    );
  }
}

export default AnalyticsChart;
