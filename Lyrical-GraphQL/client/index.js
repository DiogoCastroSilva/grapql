import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './style/styles.css'

// Libraries
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// Components
import SongList from './components/SongList';
import App from './components/App';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';


const client = new ApolloClient({
  // Keeping track of every id to identify changes in GraphQL
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
        </Route>
        <Route path="/songs/new" component={SongCreate} />
        <Route path="/songs/:id" component={SongDetail} />
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
