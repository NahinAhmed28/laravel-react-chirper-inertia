import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from "react";
import { Head } from '@inertiajs/react';
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";

import {Chart, ArcElement, CategoryScale,LinearScale,BarElement} from 'chart.js'
Chart.register(ArcElement,CategoryScale,LinearScale,BarElement);


export default function Dashboard(props) {


    const [chartDataPie] = useState({

        datasets: [
            {
                labels:['Blue','Orange'],
                data: [55, 23],
                // you can set indiviual colors for each bar
                backgroundColor: [
                    'rgba(20,54,166,0.93)',
                    'rgb(211,180,27)',
                ],
                borderWidth: 1,
            }
        ]

    });
    const [chartDataBar] = useState({

        datasets: [{
            axis: 'y',
            data: [65, 59, 80, 81, 56, 55, 40],

            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    });


    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Log-Info</h2>}
        >
            <Head title="API-INFO" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="px-6 py-2 text-gray-900">
                            APIs Home
                        </div>
                        <div className="px-6 py-2 bg-gray-300 text-black-900">
                            <span className="pr-6">Controls</span> <span className="px-6 font-bold">YEAR</span>  <span className="px-6 font-bold">MONTH</span>
                        </div>
                          <div className="border  border-gray-100 text-gray-700">
                              <div className="grid grid-cols-5 ">
                                  <div className="py-6 col-span-2 border  border-gray-400">
                                      <span className="pl-3 font-bold">MTD Traffic By usage plan</span>
                                      <div className="py-6 flex items-center justify-center">
                                          <PieChart chartData={chartDataPie} />
                                      </div>
                                  </div>
                                  <div className="py-6  col-span-3 border border-gray-500">
                                      <span className="pl-3 font-bold">Top Enterprise Customer bt MTD Traffic</span>
                                      <div className="py-6 flex items-center justify-center">
                                          <BarChart chartData={chartDataBar} />
                                      </div>
                                  </div>
                              </div>
                        </div>
                        <div className="px-6 py-2  text-black-900">
                            <span className="pr-6">Usage Plan Pivot Table</span>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
