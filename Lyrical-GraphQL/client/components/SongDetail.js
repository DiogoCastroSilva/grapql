import React, { Component } from 'react';

// Libraries
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

// Queries
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricsList from './LyricsList';


class SongDetail extends Component {

    render() {
        const { song } = this.props.data;

        if (!song) return <div>Loading...</div>;

        return(
            <div>
                <Link to="/">Back</Link>
                <h3>{song.title}</h3>
                <LyricsList lyrics={song.lyrics} />
                <LyricCreate songId={this.props.params.id} />
            </div>
        );
    }
}

export default graphql(
    fetchSong,
    {
        options: ({ params: { id } }) => ({ variables: { id} })
    }
)(SongDetail);