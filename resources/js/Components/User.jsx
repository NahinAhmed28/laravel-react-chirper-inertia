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

                <table className="table">
                    <thead>
                    <tr key={ user.id }>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    </thead>

                    <tbody>
                    { this.renderUsers() }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default User;

if (document.getElementById('usersInfo')) {
    ReactDOM.render(<User />, document.getElementById('usersInfo'));
}
