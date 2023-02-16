import React from "react";
import { Line } from "react-chartjs-2";


function LineChart({ chartData ,chartOption}) {

    return (
        <div >
            <Line
                data={chartData}
                options= {chartOption}
            />
        </div>
    );
}
export default LineChart;
