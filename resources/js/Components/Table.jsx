import React from "react";



function Table() {
    return (
        <div className="overflow-x-scroll	">

            <table className="table-auto w-full text-center mt-6 border-collapse">
                <thead>
                <tr className="divide-x divide-gray-400 border border-gray-400">
                    <th className="px-2">Plan Name</th>
                    <th className="px-2">Customer</th>
                    <th className="px-2">/</th>
                    <th className="px-2">/login</th>
                    <th className="px-2">/orders</th>
                    <th className="px-2">/profile</th>
                    <th className="px-2">/shoppingcart</th>
                    <th className="px-2">/total</th>
                </tr>
                </thead>
                <tbody>
                <tr className="divide-x divide-gray-400 border border-gray-400">
                    <td className="px-2">a</td>
                    <td className="px-2">a</td>
                    <td className="bg-red-500">a</td>
                    <td className="bg-red-500">a</td>
                    <td className="bg-red-500">a</td>
                    <td className="bg-red-500">a</td>
                    <td className="bg-red-500">a</td>
                    <td className="px-2">a</td>
                </tr>
                <tr className="divide-x divide-gray-400 border border-gray-400">
                    <td className="px-2">a</td>
                    <td className="px-2">a</td>
                    <td className="bg-orange-500">a</td>
                    <td className="bg-orange-500">a</td>
                    <td className="bg-orange-500">a</td>
                    <td className="bg-orange-500">a</td>
                    <td className="bg-orange-500">a</td>
                    <td className="px-2">a</td>
                </tr>
                <tr className="divide-x divide-gray-400 border border-gray-400">
                    <td className="px-2">a</td>
                    <td className="px-2">a</td>
                    <td className="bg-orange-400">a</td>
                    <td className="bg-orange-400">a</td>
                    <td className="bg-orange-400">a</td>
                    <td className="bg-orange-400">a</td>
                    <td className="bg-orange-400">a</td>
                    <td className="px-2">a</td>
                </tr>
                <tr className="divide-x divide-gray-400 border border-gray-400">
                    <td className="px-2">a</td>
                    <td className="px-2">a</td>
                    <td className="bg-yellow-400">a</td>
                    <td className="bg-yellow-400">a</td>
                    <td className="bg-yellow-400">a</td>
                    <td className="bg-yellow-400">a</td>
                    <td className="bg-yellow-400">a</td>
                    <td className="px-2">a</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Table;
