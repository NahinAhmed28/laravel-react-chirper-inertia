import React from "react";



function Table() {
    return (
        <div className="overflow-x-scroll">

            <table className="table-auto w-full text-center mt-6">
                <thead>
                <tr className="divide-x divide-gray-400 border border-gray-400">
                    <th>Plan Name</th>
                    <th>Customer</th>
                    <th>/</th>
                    <th>/login</th>
                    <th>/orders</th>
                    <th>/profile</th>
                    <th>/shoppingcart</th>
                    <th>/total</th>
                </tr>
                </thead>
                <tbody>
                <tr className="divide-x divide-gray-400 border border-gray-400">
                    <td>a</td>
                    <td>a</td>
                    <td className="bg-red-500">a</td>
                    <td className="bg-orange-400">a</td>
                    <td className="bg-orange-400">a</td>
                    <td className="bg-orange-400">a</td>
                    <td className="bg-orange-600">a</td>
                    <td>a</td>
                </tr>
                <tr className="divide-x divide-gray-400 border border-gray-400">
                    <td>a</td>
                    <td>a</td>
                    <td className="bg-red-500">a</td>
                    <td className="bg-orange-400">a</td>
                    <td className="bg-orange-400">a</td>
                    <td className="bg-orange-400">a</td>
                    <td className="bg-orange-600">a</td>
                    <td>a</td>
                </tr>
                <tr className="divide-x divide-gray-400 border border-gray-400">
                    <td>a</td>
                    <td>a</td>
                    <td className="bg-red-500">a</td>
                    <td className="bg-orange-400">a</td>
                    <td className="bg-orange-400">a</td>
                    <td className="bg-orange-400">a</td>
                    <td className="bg-orange-600">a</td>
                    <td>a</td>
                </tr>
                <tr className="divide-x divide-gray-400 border border-gray-400">
                    <td>a</td>
                    <td>a</td>
                    <td className="bg-red-500">a</td>
                    <td className="bg-orange-400">a</td>
                    <td className="bg-orange-400">a</td>
                    <td className="bg-orange-400">a</td>
                    <td className="bg-orange-600">a</td>
                    <td>a</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Table;
