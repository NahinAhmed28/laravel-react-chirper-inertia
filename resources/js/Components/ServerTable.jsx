import React from "react";



function ServerTable() {
    return (
        <div className="overflow-x-scroll	">

            <table className="table-auto w-full text-center mt-6 border-collapse">
                <thead className="bg-gradient-to-r from-indigo-500 to-indigo-200 text-deep-purple-700 font-bold">
                <tr className="divide-x divide-gray-400 border border-gray-400">
                    <th className="px-2">Name</th>
                    <th className="px-2">Success</th>
                    <th className="px-2">Failure</th>
                    <th className="px-2">Exceptions</th>

                </tr>
                </thead>
                <tbody>
                <tr className="divide-x divide-gray-400 border border-gray-400">
                    <td className="px-2">a</td>
                    <td className="px-2">a</td>
                    <td className="px-2">a</td>
                    <td className="px-2">a</td>

                </tr>
                <tr className="divide-x divide-gray-400 border border-gray-400">
                    <td className="px-2">a</td>
                    <td className="px-2">a</td>
                    <td className="px-2">a</td>
                    <td className="px-2">a</td>

                </tr>
                </tbody>
            </table>
        </div>
    );
}
export default ServerTable;
