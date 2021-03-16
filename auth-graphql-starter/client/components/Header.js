import React, { Component } from 'react';

// Libraries
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

// Queries
import query from '../queries/currentUser';

// Mutations
import mutation from '../mutations/logout';


class Header extends Component {
    onLogout() {
        this.props.mutate({
            refetchQueries: [{
                query
            }]
        });
    }

    renderButtons() {
        const { loading, user } = this.props.data;
        if (loading) {
            return (
                <div>Loading...</div>
            );
        }

        if (user) {
            return (
                <li>
                    <a onClick={this.onLogout.bind(this)}>
                        Logout
                    </a>
                </li>
            );
        } else {
            return (
                <div>
                    <li>
                        <Link to="/signup">
                            Signup
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </div>
            )
        }

    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to="/"
                        className="brand-logo left"
                    >
                        Home
                    </Link>
                    <ul className="right">
                        {this.renderButtons()}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default graphql(mutation)(
    graphql(query)(Header)
);