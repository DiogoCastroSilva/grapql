import React, { Component } from 'react';

// Libraries
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

// Queries
import currentUser from '../queries/currentUser';


/**
 *  Used in components that require the user to be authenticated,
 * if not will redirect the user to the Login page
 * @param WrappedComponent
 */
function requireAuth(WrappedComponent) {
    class RequireAuth extends Component {
        componentDidUpdate() {
            if (
                !this.props.data.loading &&
                !this.props.data.user
            ) {
                hashHistory.push('/login');
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    return graphql(currentUser)(RequireAuth);
}

export default requireAuth;