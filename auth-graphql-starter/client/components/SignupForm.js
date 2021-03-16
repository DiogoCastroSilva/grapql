import React, { Component } from 'react';

// libraries
import { graphql } from 'react-apollo';

// Mutations
import mutation from '../mutations/signup';

// Components
import AuthForm from './AuthForm';


class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit({ email, password }) {
        this.props.mutate({
            variables: {
                email,
                password
            }
        });
    }

    render() {
        return (
            <div className="container">
                <h3>Sign Up</h3>
                <AuthForm
                    onSubmit={this.onSubmit}
                    errors={[]}
                />
            </div>
        );
    }
}

export default graphql(mutation)(SignupForm);