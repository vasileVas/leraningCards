import * as React from 'react';
import './App.css';

import Decks from './components/Decks';
import Header from './components/Header';

import { BrowserRouter, Redirect, Route } from 'react-router-dom';

class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Route path="/decks" render={() => <Decks />} />
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
