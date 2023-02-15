import React from "react";
import { Bar } from "react-chartjs-2";


function BarChart({ chartData },{chartOption}) {
    return (
        <div>

            <Bar
                data={chartData}
                options= {chartOption}
            />
        </div>
    );
}
export default BarChart;
