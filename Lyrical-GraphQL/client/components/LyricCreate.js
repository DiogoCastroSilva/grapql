import React, { Component } from 'react';

// Libraries
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


class LyricCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.mutate({
            variables: {
                content: this.state.content,
                id: this.props.songId
            }
        }).then(() => {
            this.setState({ content: '' });
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label htmlFor="lyric-content">Add a Lyric</label>
                <input
                    id="lyric-content"
                    value={this.state.content}
                    onChange={({ target: { value }}) => this.setState({ content: value })}
                />
            </form>
        );
    }
}

const Mutation = gql`
    mutation addLyricToSong($id: ID!, $content: String) {
        addLyricToSong(songId: $id, content: $content) {
            id,
            lyrics {
                id,
                content,
                likes
            }
        }
    }
`;

export default graphql(Mutation)(LyricCreate);