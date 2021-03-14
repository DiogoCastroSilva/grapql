import React, { Component } from 'react';

// Libraries
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router';

// Queries
import fetchSongs from '../queries/fetchSongs';


class SongList extends Component {

    onSongDelete(id) {
        this.props.mutate({
            variables: {
                id
            }
        }).then(() => {
            // Will refresh the query of this component
            this.props.data.refetch();
        });
    }

    renderSongs() {
        return this.props.data.songs.map(({ id, title }) => (
            <li key={id} className="collection-item">
                <Link to={`/songs/${id}`}>
                    {title}
                </Link>
                <i
                    className="material-icons"
                    onClick={() => this.onSongDelete(id)}
                >
                    delete
                </i>
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
            <div>
                <ul className="collection">
                    {this.renderSongs()}
                </ul>
                <Link
                    to="/songs/new"
                    className="btn-floating btn-large red right"
                >
                    <i className="material-icons">
                        add
                    </i>
                </Link>
            </div>
        );
    }
}

const Mutation = gql`
    mutation deleteSong($id: ID) {
        deleteSong(id:$id) {
            id
        }
    }
`;

export default graphql(Mutation)(
    graphql(fetchSongs)(SongList)
);