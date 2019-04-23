import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {months} from "../../data";

const labelledData = months.labels.map(
    (v, i) => ({
        name: v,
        y: months.datasets[0].data[i]
    })
)

const options = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Line'
    },
    xAxis: {
        title: {
            text: 'Months'
        }
    },
    series: [
        {
            name: 'Values over months',
            data: labelledData
        }
    ]
};

export const HighchartLineWrapper = () => (
    <div className="pie">
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </div>
)