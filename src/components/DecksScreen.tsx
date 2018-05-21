import * as React from 'react';
import { Route } from 'react-router-dom';
import Decks from './Decks';

export default class DecksScreen extends React.Component {
    public render() {
        return (
            <>
                <Route exact={true} path="/decks" render={() => <Decks />} />
                <Route path="/decks/add" render={() => <h1>Add deck</h1>} />
            </>
        );
    }
}
