import { monthsLine, monthsLine1, monthsLine2 } from "../../data";
import React from "react";
import styled from 'styled-components';
import {Line} from "react-chartjs-2";

const dataSet = [monthsLine, monthsLine1, monthsLine2];

const ButtonsWrapper = styled.div`
 button:nth-child(2) {
    float: right;
 }
`

export class ChartJSLineWrapper extends React.Component {
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

    changeChartData(shouldIncrease) {
        this.setState(state => {
            const chType = state.chartType,
                outOfRange = (shouldIncrease && chType === 2) || (!shouldIncrease && chType === 0);
            let nextType;

            if (outOfRange) {
                nextType = chType
            } else {
                nextType = shouldIncrease ? chType + 1 : chType - 1
            }

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
            },
              scales: {
                  yAxes: [{
                      scaleLabel: {
                          display: true,
                          labelString: 'Values'
                      }
                  }],
                  xAxes: [{
                      scaleLabel: {
                          display: true,
                          labelString: 'Months'
                      }
                  }]
              }
          }}
        />

        <ButtonsWrapper>
            <button onClick={this.changeChartData.bind(this, false)}>
                Decrease (-)
            </button>
            <button onClick={this.changeChartData.bind(this, true)}>
                Increase (+)
            </button>
        </ButtonsWrapper>


      </div>
    );
  }
}
