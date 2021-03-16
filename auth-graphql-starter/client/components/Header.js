import React, { Component } from 'react';

// Libraries
import { graphql } from 'react-apollo';
// Queries
import query from '../queries/currentUser';


class Header extends Component {

    render() {
        return (
            <div>
                Header
            </div>
        );
    }
}

export default graphql(query)(Header);