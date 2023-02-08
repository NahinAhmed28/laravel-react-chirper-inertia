import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import NavLink from "@/Components/NavLink";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";


export default function Index(props) {
    let posts = props.posts;
    console.log(posts);
    let i = 1;
    // let links = props.posts.links;

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Posts List
                </h2>

            }
        >
            <Head title="Posts List" />


            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <NavLink  href={route('post.create')}>
                                <button className="ml-3 bg-purple-500 text-white px-4 py-2.5 rounded-md float-right mb-4" >
                                    Create New Post
                                </button>
                            </NavLink>
                            <table className="table-auto w-full text-center">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th >Action</th>
                                </tr>
                                </thead>
                                <tbody>

                                {posts.map((post) => (
                                    <tr key={post._id}>
                                        <td>{i++}</td>
                                        <td>{post.title}</td>
                                        <td>{post.description}</td>
                                        <td>
                                            <div className="flex justify-center">
                                            {/*<PrimaryButton >Edit</PrimaryButton>*/}


                                            <NavLink class="text-white" href={route('post.edit',[post._id])}>
                                                <PrimaryButton  className="mx-1 text-white">
                                                Edit
                                                </PrimaryButton>
                                            </NavLink>
                                                <NavLink class="text-white" href={route('post.destroy',[post._id])}>
                                                    <button className="ml-3 bg-red-600 text-white px-4 py-2.5 rounded-md" >
                                                        Delete
                                                    </button>
                                                </NavLink>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
