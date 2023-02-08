import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link, usePage } from "@inertiajs/react";

export default function Create(props) {

    const { message } = usePage().props

    const {  setData, errors, } = useForm({
        title: "",
        description: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("post.store"));
        alert("Function is working perfectly.");

        post.title = "";
        post.description = "";
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Posts Create
                </h2>
            }
        >
            <Head title="Posts Create" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Title</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Title"
                                            name="title"
                                            // value={post.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                        />

                                    </div>
                                    <div className="mb-0">
                                        <label className="">Description</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="description"
                                            name="description"
                                            // errors={errors.body}
                                            // value={post.body}
                                            onChange={(e) =>
                                                setData("body", e.target.value)
                                            }
                                        />

                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
