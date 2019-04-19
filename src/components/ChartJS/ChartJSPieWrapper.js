import React from "react";
import {months} from "../../data";
import {Pie} from "react-chartjs-2";

export const ChartJSPieWrapper = () => (
    <div className="pie">
        <Pie
            data={months}
            options={{
                layout: {
                    padding: 20
                }
            }}
        />
    </div>
)