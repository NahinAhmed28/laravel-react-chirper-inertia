import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";


export default function Demo(props) {
    let users = props.users;
    let i = 1;
    console.log(users);
    // let links = props.users.links;

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Users List
                </h2>
            }
        >
            <Head title="Users List" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="table-auto w-full text-center">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th >Action</th>
                                </tr>
                                </thead>
                                <tbody>

                                {users.map((user) => (
                                   <tr key={user._id}>
                                       <td>{i++}</td>
                                       <td>{user.name}</td>
                                       <td>{user.email}</td>
                                       <td>
                                           <PrimaryButton>Edit</PrimaryButton>
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
