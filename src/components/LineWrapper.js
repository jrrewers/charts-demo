import {monthsLine, monthsLine_small} from "../data";
import React from "react";
import {Line} from "react-chartjs-2";

export class LineWrapper extends React.Component {

    constructor(props) {
        super(props);

        this.state = {chartData: monthsLine}
    }


    async changeChartData() {
       await this.setState(state => {
            return state.chartData === monthsLine
                ? {chartData: monthsLine_small}
                : {chartData: monthsLine}
        })
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

                <button
                    onClick={this.changeChartData.bind(this)}
                >
                    Change chart data
                </button>
            </div>
        )
    }
}
