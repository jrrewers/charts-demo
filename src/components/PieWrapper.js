import React from "react";
import {Pie} from "react-chartjs-2";
import {months} from "../data";

export const PieWrapper = () => (
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