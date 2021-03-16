import React from 'react';
import ReactDOM from 'react-dom';

// Libraries
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory, Route } from 'react-router';

// Components
import App from './components/App';


const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App} />
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
