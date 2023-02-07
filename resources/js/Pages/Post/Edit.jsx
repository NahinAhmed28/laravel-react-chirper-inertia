// import React from "react";
//
//
// const Edit = () => {
//     const { post } = props.post;
//     const { data, setData, put, errors } = useForm({
//         title: post.title || "",
//         description: post.description || "",
//     });
//
//     function handleSubmit(e) {
//         e.preventDefault();
//         put(route("posts.update", post.id));
//     }
//     function destroy() {
//         if (confirm("Are you sure you want to delete this user?")) {
//             Inertia.delete(route("posts.destroy", post.id));
//         }
//     }
//
//     return (
//         <div className="mt-20">
//             <div className="container flex flex-col justify-center mx-auto">
//                 <div>
//                     <h1 className="mb-8 text-3xl font-bold">
//                         <InertiaLink
//                             href={route("posts.index")}
//                             className="text-indigo-600 hover:text-indigo-700"
//                         >
//                             Posts
//                         </InertiaLink>
//                         <span className="font-medium text-indigo-600"> /</span>
//                         Edit
//                     </h1>
//                 </div>
//                 <div className="max-w-3xl p-8 bg-white rounded shadow">
//                     <form name="createForm" onSubmit={handleSubmit}>
//                         <div className="flex flex-col">
//                             <div className="mb-4">
//                                 <label className="">Title</label>
//                                 <input
//                                     type="text"
//                                     className="w-full px-4 py-2"
//                                     label="Title"
//                                     name="title"
//                                     value={data.title}
//                                     onChange={(e) =>
//                                         setData("title", e.target.value)
//                                     }
//                                 />
//                                 <span className="text-red-600">
//                                     {errors.title}
//                                 </span>
//                             </div>
//                             <div className="mb-4">
//                                 <label className="">Description</label>
//                                 <textarea
//                                     type="text"
//                                     className="w-full rounded"
//                                     label="description"
//                                     name="description"
//                                     errors={errors.description}
//                                     value={data.description}
//                                     onChange={(e) =>
//                                         setData("description", e.target.value)
//                                     }
//                                 />
//                                 <span className="text-red-600">
//                                     {errors.description}
//                                 </span>
//                             </div>
//                         </div>
//                         <div className="flex justify-between">
//                             <button
//                                 type="submit"
//                                 className="px-4 py-2 text-white bg-green-500 rounded"
//                             >
//                                 Update
//                             </button>
//                             <button
//                                 onClick={destroy}
//                                 tabIndex="-1"
//                                 type="button"
//                                 className="px-4 py-2 text-white bg-red-500 rounded"
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Edit;

import React, { useState } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";





export default function Post(props) {
    let post = props.post;


    // function handleSubmit() {
    //     console.log(post._id);
    //     e.preventDefault();
    //     patch(route("post.update", post._id));
    // }


    const { data, setData, put, errors } = useState({
        title: post.title || "",
        description: post.description || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("post.update", post._id));
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
                                            <label className="">Title</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2"
                                                label="Title"
                                                name="title"
                                            />

                                        </div>
                                        <div className="mb-4">
                                            <label className="">Description</label>
                                            <textarea
                                                className="w-full rounded"
                                                label="description"
                                                type="text"
                                                name="description"

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
