import React from "react";
import {months} from "../../data";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const labelledData = months.labels.map(
    (v, i) => ({
        name: v,
        y: months.datasets[0].data[i],
        color: months.datasets[0].backgroundColor[i]
    })
)

const options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Bar Chart'
    },
    xAxis: {
        title: {
            text: 'Months'
        },
        categories: months.labels
    },
    series: [
        {
            name: 'Value over month',
            data: labelledData
        }
    ]
};

export const HighchartBarWrapper = () => (
    <div className="bar">
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </div>
)