import * as React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import DecksScreen from './components/DecksScreen';
import Header from './components/Header';

import { BrowserRouter, Redirect, Route } from 'react-router-dom';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

class App extends React.Component {
    public render() {
        return (
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route path="/decks" render={() => <DecksScreen />} />
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to="/decks" />}
                        />
                    </div>
                </BrowserRouter>
            </ApolloProvider>
        );
    }
}

export default App;
