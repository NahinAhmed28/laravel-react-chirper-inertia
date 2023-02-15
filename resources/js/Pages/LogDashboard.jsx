import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from "react";
import { Head } from '@inertiajs/react';
import PieChart from "../components/PieChart";
import Table from "@/Components/Table";


import BarChart from "../components/BarChart";
import {Chart, ArcElement, CategoryScale,LinearScale,BarElement,Legend,Title} from 'chart.js'

Chart.register(ArcElement,CategoryScale,LinearScale,BarElement,Legend,Title);


export default function Dashboard(props) {


    const [chartDataPie] = useState({
        // labels:["API_DEVELOPER","API_ENTERPRISE"],
        datasets: [
            {
                label: 'Users Gained',
                data: [55, 23],
                backgroundColor: [
                    'rgba(20,54,166,0.93)',
                    'rgb(211,180,27)',
                ],
                borderWidth: 1,
                borderColor: "rgba(62,84,49,0.6)",

            }
        ],


    });

    const [chartOptionPie] = useState({

        options : {

            elements: {
                bar: {
                    borderWidth: 2,
                },
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Chart.js Horizontal Bar Chart',
                },
            },
            scales: {
                y: {
                    max: 5,
                    min: 0,
                    ticks: {
                        stepSize: 0.5
                    }
                }
            }
        }
    });


    const [chartDataBar] = useState({

        labels:["a","b","c","d","e","f"],
            datasets: [
                {
                    label: 'Users Gained',
                    backgroundColor: [
                        '#B21F00',
                        '#C9DE00',
                        '#2FDE00',
                        '#00A6B4',
                        '#6800B4'
                    ],
                    hoverBackgroundColor: [
                        '#501800',
                        '#4B5000',
                        '#175000',
                        '#003350',
                        '#35014F'
                    ],
                    borderWidth: 1,
                    data: [65, 59, 80, 81, 56, 55, 40],
                }
            ]

    });
    const [chartOptionBar] = useState({
        options : {
            indexAxis: 'y' ,
            elements: {
                bar: {
                    borderWidth: 2,
                },
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Chart.js Horizontal Bar Chart',
                },
            },
            scales: {
                y: {
                    max: 5,
                    min: 0,
                    ticks: {
                        stepSize: 0.5
                    }
                }
            }
        }

    });



    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Log-Info</h2>}
        >
            <Head title="log-info" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="px-6 py-2 text-gray-900">
                            APIs Home
                        </div>
                        <div className="px-6 py-2 bg-gray-300 ">
                            <span className="pr-6">Controls</span> <span className="px-6 font-bold">YEAR</span>  <span className="px-6 font-bold">MONTH</span>
                        </div>
                          <div className="border  border-gray-100 text-gray-700">
                              <div className="grid grid-cols-5 ">
                                  <div className="py-6 col-span-2 border  border-gray-400">
                                      <span className="pl-3 font-bold">MTD Traffic By usage plan</span>
                                      <div className="py-6 flex items-center justify-center">
                                          <PieChart chartData={chartDataPie} chartOption={chartOptionPie}/>
                                      </div>
                                  </div>
                                  <div className="py-6  col-span-3 border border-gray-500">
                                      <span className="pl-3 font-bold">Top Enterprise Customer bt MTD Traffic</span>
                                      <div className="py-6 flex items-center justify-center">
                                          <BarChart chartData={chartDataBar}  chartOption={chartOptionBar} />
                                      </div>
                                  </div>
                              </div>
                        </div>
                        <div className="px-6 py-6">
                            <div className="col-span-2 pr-6 font-bold text-gray-700">Usage Plan Pivot Table</div>
                            <div className="grid grid-cols-5">
                                <div className="col-span-3 pr-6 font-bold text-gray-700"></div>
                                <div className="col-span-2 font-bold text-gray-700">URL path</div>
                            </div>
                            <Table />

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
