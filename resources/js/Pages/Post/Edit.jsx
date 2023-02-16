import React, { useState } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
// import {patch} from "axios";


export default function Edit(props) {
    let post = props.post;

    // const { data, setData, put, errors } = useState({
    //     title: post.title || "",
    //     description: post.description || "",
    // });

    // const handleChange = (event) => {
    //     this.setState({value: event.target.value});
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Function is working perfectly.");
        // axios.put(route("post.update", post._id));
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Posts Edit
                </h2>
            }
        >
            <Head title="Posts Edit" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="max-w-3xl p-8 bg-white rounded shadow">
                                <form name="createForm" onSubmit={handleSubmit}>
                                    <div className="flex flex-col">
                                        <div className="mb-4">
                                            <label className="title">Title</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2"
                                                name="title"
                                                // value={this.state.value}
                                                autoComplete="name"
                                                // onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="description">Description</label>
                                            <textarea
                                                className="w-full rounded"
                                                name="description"
                                                // value={this.state.value}
                                                autoComplete="name"
                                                // handleChange={onHandleChange}
                                            />
                                        </div>
                                    </div>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 text-white bg-indigo-600 rounded"
                                        >
                                            Update
                                        </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
