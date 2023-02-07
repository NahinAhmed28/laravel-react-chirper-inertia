import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('/api/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ users });
            });
    }

    renderUsers() {
        return this.state.users.map(user => {
            return (
                <tr>
                    <td>{ user._id }</td>
                    <td>{ user.name }</td>
                    <td>{ user.email }</td>
                </tr>
            );
        })
    }

    render() {
        return (
            <div>
                <h2>Hey,</h2>

                <p>Here are the people using your application...</p>

                {/*<table className="table">*/}
                {/*    <thead>*/}
                {/*    <tr key={ user._id }>*/}
                {/*        <th>ID</th>*/}
                {/*        <th>Name</th>*/}
                {/*        <th>Email</th>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}

                {/*    <tbody>*/}
                {/*    { this.renderUsers() }*/}
                {/*    </tbody>*/}
                {/*</table>*/}
            </div>
        );
    }
}

export default User;

// <AuthenticatedLayout
//     auth={props.auth}
//     errors={props.errors}
//     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
// >
//     <Head title="Dashboard" />
//
//     <div className="py-12">
//         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//             <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                 <div className="p-6 text-gray-900">You're logged in!</div>
//                 <User className="p-6 text-gray-900"></User>
//             </div>
//         </div>
//     </div>
// </AuthenticatedLayout>
