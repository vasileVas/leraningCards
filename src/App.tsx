import * as React from 'react';
import './App.css';

import Decks from './components/Decks';

import { BrowserRouter, Link, Redirect, Route } from 'react-router-dom';

class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="header">
                        <Link to="/decks">View all Decks</Link>
                        <Link to="/decks/add">Add Deck</Link>
                    </div>
                    <Route path="/decks" component={Decks} />
                    <Route
                        exact
                        path="/"
                        render={() => <Redirect to="/decks" />}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
