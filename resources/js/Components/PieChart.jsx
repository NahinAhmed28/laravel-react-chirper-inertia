import React from "react";
import { Pie } from "react-chartjs-2";


<<<<<<< HEAD
function PieChart({ chartData },{chartOption}) {
=======
function PieChart({ chartData ,chartOption}) {
>>>>>>> bc9f4d1492a2e1b2cb645223368dda1e10aef2fa

    return (
        <div>
            <Pie
                data={chartData}
                options= {chartOption}
            />
        </div>
    );
}
export default PieChart;
