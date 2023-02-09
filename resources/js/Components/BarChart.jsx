import React from "react";
import { Bar } from "react-chartjs-2";


function BarChart({ chartData }) {
    return (
        <div>

            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            // text: "Users Gained between 2016-2020"
                        }
                    }
                }}
            />
        </div>
    );
}
export default BarChart;
