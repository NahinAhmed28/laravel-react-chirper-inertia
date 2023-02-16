import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from "react";
import { Head } from '@inertiajs/react';

import Table from "@/Components/Table";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import {Chart, ArcElement, CategoryScale,LinearScale,BarElement,Legend,Title,PointElement,LineElement,Tooltip} from 'chart.js'

Chart.register(ArcElement,CategoryScale,LinearScale,BarElement,Legend,Title,PointElement,LineElement,Tooltip);


export default function Dashboard(props) {


    const [chartDataPie] = useState({
        labels: ["API_DEVELOPER", "API_ENTERPRISE"],
        datasets: [
            {
                label: ["API_DEVELOPER", "API_ENTERPRISE"],
                data: [55, 23],
                backgroundColor: [
                    'rgba(20,54,166,0.93)',
                    'rgb(211,180,27)',
                ],
                borderWidth: 1,
                borderColor: "rgba(62,84,49,0.6)",
            }
        ]
    });

    const [chartOptionPie] = useState({
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (context.parsed.y !== null) {
                            label += ': ' + context.parsed.y;
                        }
                        return label;
                    }
                }
            }
        }
    });

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const [chartDataBar] = useState({

        labels,
            datasets: [
                {
                    label: ['200'],
                    backgroundColor: [
                        '#001eb4'
                    ],
                    hoverBackgroundColor: [
                        '#35014F'
                    ],
                    borderWidth: 1,
                    data: [65, 59, 80, 81, 56, 55, 40],
                }
            ]

    });
    const [chartOptionBar] = useState({
            indexAxis: 'x',
            elements: {
                bar: {
                    borderWidth: 1,
                },
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: false,
                    text: 'Chart.js Horizontal Bar Chart',
                },
            },
            scales: {
                y: {
                    max: 15,
                    min: 0,
                    barThickness: 1, // adjust the bar width here
                },
            }

    });
    const [chartDataLine] = useState({
        labels:["a","b","c","d","e","f"],
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgb(20,105,17)',
                backgroundColor: 'rgba(104,255,99,0.5)',
            },
            // {
            //     label: 'Dataset 2',
            //     data: [75, 69, 90, 91, 6, 55, 90],
            //     borderColor: 'rgb(53, 162, 235)',
            //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
            // },
        ],
    });

    const [chartOptionLine] = useState({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
        },
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
                    <div className="my-2 p-10 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-2 bg-gray-800 text-white ">
                            <span className="font-bold">All Systems</span>
                        </div>
                        <div className="flex flex-wrap justify-center mb-10">
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 border-gray-300 border">
                                    <p>Success</p>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 border-gray-300 border">
                                    <p>Failure</p>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 border-gray-300 border">
                                    <p>Exceptions</p>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 border-gray-300 border">
                                    <p>Active</p>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 border-gray-300 border">
                                    <p>Memory Used (Avg)</p>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 border-gray-300 border">
                                <p>Disk Used (%)</p>
                            </div>
                        </div>

                        <LineChart chartData={chartDataLine} chartOption={chartOptionLine} />
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg ">
                         <span className="relative inline-flex items-center px-4 py-1 text-gray-900 border-x-2 border-gray-300 bg-gray-300 ">
                            <span className="mx-4">APIs: Home</span>
                            <svg className="w-4 h-4 absolute right-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 13l-6-6h12l-6 6z" />
                            </svg>
                         </span>
                        <span className="px-4 py-1 text-gray-900 border-x-2 border-gray-300">
                            APIs: Enterprise
                        </span>
                        <span className="px-4 py-1 text-gray-900 border-x-2 border-gray-300">
                            APIs: Developers
                        </span>
                        <div className="px-6 py-2 bg-gray-300 ">
                            <span className="pr-6">Controls</span> <span className="px-6 font-bold">YEAR</span>  <span className="px-6 font-bold">MONTH</span>
                        </div>
                          <div className="border  border-gray-100 text-gray-700">
                              <div className="grid md:grid-cols-2 sm:grid-cols-5">
                                  <div className="py-6 border border-gray-400">
                                      <span className="pl-3 font-bold">MTD Traffic By usage plan</span>
                                      <div className="py-6 flex items-center justify-center">
                                          <PieChart chartData={chartDataPie} chartOption={chartOptionPie} />
                                      </div>
                                  </div>
                                  <div className="py-6 border border-gray-500">
                                      <span className="pl-3 font-bold">Top Enterprise Customer bt MTD Traffic</span>
                                      <div className="py-6 flex items-center justify-center">
                                          <BarChart chartData={chartDataBar} chartOption={chartOptionBar} horizontal={true} />
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
