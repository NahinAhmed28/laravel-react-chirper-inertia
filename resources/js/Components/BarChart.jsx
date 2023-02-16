import React from "react";
import { Bar } from "react-chartjs-2";


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

export default BarChart;
