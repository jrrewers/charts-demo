import {monthsLine} from "../../data";
import React from "react";
import {Line} from "react-chartjs-2";

export const ChartJSLineWithoutAxisWrapper = () => (
    <div className="line">
        <Line
            data={monthsLine}
            options={{
                layout: {
                    padding: 20
                },
                elements: {
                    line: {
                        tension: 0
                    }
                },
                scales: {
                    yAxes: [{
                        display: false
                    }],
                    xAxes: [{
                        display: false
                    }]
                }
            }}
        />
    </div>
)