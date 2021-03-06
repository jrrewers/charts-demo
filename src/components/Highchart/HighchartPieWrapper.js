import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {months} from "../../data";


const labelledData = months.labels.map(
        (v, i) => ({
            name: v,
            y: months.datasets[0].data[i],
            color: months.datasets[0].backgroundColor[i]
        })
    )


const options = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Pie Chart'
    },
    xAxis: {
        title: {
            text: 'Months'
        },
        categories: months.labels
    },
    series: [
        {
            name: 'Values over months',
            data: labelledData,
            color: months.datasets[0].backgroundColor
        }
    ]
};


export const HighchartPieWrapper = () => (
    <div className="pie">
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </div>
)