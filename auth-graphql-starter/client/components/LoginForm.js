import React, { Component } from 'react';

// libraries
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

// Mutations
import mutation from '../mutations/login';

// Queries
import query from '../queries/currentUser';

// Components
import AuthForm from './AuthForm';


class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: []
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidUpdate(nextProps) {
        if (!this.props.data.user && nextProps.data.user) {
            hashHistory.push('/dashboard');
        }
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
        }).catch(res => {
            const errors = res.graphQLErrors.map(error => error.message);
            this.setState({ errors });
        });
    }

    render() {
        return (
            <div className="container">
                <h3>Login</h3>
                <AuthForm
                    errors={this.state.errors}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

export default graphql(query)(
    graphql(mutation)(LoginForm)
);