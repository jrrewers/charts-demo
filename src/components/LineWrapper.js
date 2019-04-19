import { monthsLine, monthsLine1, monthsLine2 } from "../data";
import React from "react";
import { Line } from "react-chartjs-2";

const dataSet = [monthsLine, monthsLine1, monthsLine2];

export class LineWrapper extends React.Component {
  constructor(props) {
    super(props);

    /**
     * Chart.js mutates the original data object **on init** - it looks like a known bug
     * and no workaround https://github.com/jerairrest/react-chartjs-2/issues/250
     *
     * For this reason we just drop it a copy of the initial data. This allows for the future
     * updates to trigger without issue.
     */
    this.state = {
      chartType: 0,
      chartData: JSON.parse(JSON.stringify(dataSet[0]))
    };
  }

  changeChartData() {
    this.setState(state => {
      const nextType = state.chartType === 2 ? 0 : state.chartType + 1;
      return {
        chartType: nextType,
        chartData: dataSet[nextType]
      };
    });
  }

  render() {
    return (
      <div className="line">
        <Line
          data={this.state.chartData}
          options={{
            layout: {
              padding: 20
            }
          }}
        />

        <button onClick={this.changeChartData.bind(this)}>
          Change chart data
        </button>
      </div>
    );
  }
}
