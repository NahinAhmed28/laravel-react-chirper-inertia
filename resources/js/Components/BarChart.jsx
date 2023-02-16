import React from "react";
import { Bar } from "react-chartjs-2";


<<<<<<< HEAD
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
=======
function BarChart({ chartData, chartOption, horizontal = false }) {
    const newChartOption = { ...chartOption };
    if (horizontal) {
        newChartOption.indexAxis = "y";
    }
    return (
        <div>
            <Bar data={chartData} options={newChartOption} />
        </div>
    );
}

>>>>>>> bc9f4d1492a2e1b2cb645223368dda1e10aef2fa
export default BarChart;
