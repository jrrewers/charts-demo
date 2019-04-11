import React from "react";
import {incomes} from "../data";
import {ResponsivePie} from "@nivo/pie";

export const Pie = () => (
    <div className="pie">
        <ResponsivePie
            data={incomes}
            margin={{
                "top": 40,
                "right": 80,
                "bottom": 80,
                "left": 80
            }}
            innerRadius={0.5}
        />
    </div>
)