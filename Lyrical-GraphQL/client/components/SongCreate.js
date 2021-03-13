import React, { Component } from 'react';

// Libraries
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';



const MUTATION = gql`
    mutation AddSong($title: String) {
        addSong(title: $title) {
            id,
            title
        }
    }
`;

class SongCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.mutate({
            variables: {
                title: this.state.title
            }
        })
    }

    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Create a New Song</h3>
                <form onSubmit={this.onSubmit}>
                    <label>Song Title:</label>
                    <input
                        onChange={(e) =>
                            this.setState({ title: e.target.value })
                        }
                        value={this.state.title}
                    />
                </form>
            </div>
        );
    }
}

export default graphql(MUTATION)(SongCreate);