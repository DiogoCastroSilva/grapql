import React, { Component } from 'react';

// Libraries
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


const GET_SONGS = gql`
    {
        songs {
            id,
            title
        }
    }
`;

class SongList extends Component {

    renderSongs() {
        return this.props.data.songs.map(({ id, title }) => (
            <li key={id} className="collection-item">
                {title}
            </li>
        ));
    }

    render() {

        if (this.props.data.loading) {
            return (
                <div>
                    Loading songs...
                </div>
            );
        }

        return (
            <ul className="collection">
                {this.renderSongs()}
            </ul>
        );
    }
}

export default graphql(GET_SONGS)(SongList);