import React, { Component } from 'react';

// libraries
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

// Mutations
import mutation from '../mutations/signup';

// Queries
import query from '../queries/currentUser';

// Components
import AuthForm from './AuthForm';


class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: []
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillUpdate(nextProps) {
        if (nextProps.data.user && !this.props.data.user) {
            hashHistory.push('/dashboard');
        }
    }

    onSubmit({ email, password }) {
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
                <h3>Sign Up</h3>
                <AuthForm
                    onSubmit={this.onSubmit}
                    errors={this.state.errors}
                />
            </div>
        );
    }
}

export default graphql(query)(
    graphql(mutation)(SignupForm)
);