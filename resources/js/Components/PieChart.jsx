import React from "react";
import { Pie } from "react-chartjs-2";


function PieChart({ chartData },{chartOption}) {

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
