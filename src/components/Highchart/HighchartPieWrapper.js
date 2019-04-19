import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {months} from "../../data";

const options = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Pie Chart'
    },
    xAxis: {
      title: {
          text: 'Months'
      }
    },
    series: [
        {
            name: 'Values over months',
            labels: months.labels,
            data: months.datasets[0].data
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