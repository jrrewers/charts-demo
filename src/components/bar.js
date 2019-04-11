import {customers} from "../data";
import {ResponsiveBar} from "@nivo/bar";
import React from "react";

export const Bar = () => (
    <div className="bar">
        <ResponsiveBar
            data={customers}
            keys={["valueA", "valueB", "valueC", "valueD", "valueE"]}
            indexBy={"name"}
            margin={{
                "top": 50,
                "right": 130,
                "bottom": 50,
                "left": 60
            }}
            padding={0.3}
        />
    </div>
)