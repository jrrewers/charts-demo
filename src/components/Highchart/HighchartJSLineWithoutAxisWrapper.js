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
        type: 'line'
    },
    title: {
        text: 'Lino w/o axis'
    },
    xAxis: {
        visible: false
    },
    yAxis: {
        visible: false
    },
    series: [
        {
            name: 'Value over month',
            data: labelledData
        }
    ]
};

export const HighchartWithoutLineWrapper = () => (
    <div className="pie">
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </div>
)