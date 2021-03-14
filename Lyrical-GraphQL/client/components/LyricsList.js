import React, { Component } from 'react';

// Libraries
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


class LyricsList extends Component {
    onLike(id) {
        this.props.mutate({
            variables: { id }
        });
    }

    renderLyrics() {
        return this.props.lyrics.map(({ id, content, likes }) => (
            <li
                key={id}
                className="collection-item"
            >
                {content}
                <div className="vote-box">
                    <i
                        className="material-icons"
                        onClick={() => this.onLike(id)}
                    >
                        thumb_up
                    </i>
                    {likes}
                </div>
            </li>
        ));
    }

    render() {
        return (
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        );
    }
}

const MUTATION = gql`
    mutation likeLyric($id: ID!) {
        likeLyric(id: $id) {
            id,
            likes
        }
    }
`;

export default graphql(MUTATION)(LyricsList);