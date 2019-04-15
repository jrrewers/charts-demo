import {monthsLine} from "../data";
import React from "react";
import {Line} from "react-chartjs-2";

export const LineWrapper = () => (
    <div className="line">
        <Line
            data={monthsLine}
            options={{
                layout: {
                    padding: 20
                }
            }}
        />
    </div>
)