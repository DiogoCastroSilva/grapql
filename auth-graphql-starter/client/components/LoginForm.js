import React, { Component } from 'react';

// libraries
import { graphql } from 'react-apollo';

// Mutations
import mutation from '../mutations/login';

// Queries
import query from '../queries/currentUser';

// Components
import AuthForm from './AuthForm';


class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit({ email, password}) {
        this.props.mutate({
            variables: {
                email,
                password
            },
            refetchQueries: [
                { query }
            ]
        });
    }

    render() {
        return (
            <div className="container">
                <h3>Login</h3>
                <AuthForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default graphql(mutation)(LoginForm);