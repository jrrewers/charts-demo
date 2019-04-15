import {months} from "../data";
import React from "react";
import {Bar} from "react-chartjs-2";

export const BarWrapper = () => (
    <div className="bar">
        <Bar
            data={months}
            options={{
                layout: {
                    padding: 20
                }
            }}
        />
    </div>
)