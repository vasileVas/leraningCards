import * as React from 'react';
import { Route } from 'react-router-dom';

interface Props {
    name: string;
}

export default class Decks extends React.Component<Props> {
    public render() {
        return (
            <div>
                <Route
                    exact={true}
                    path="/decks"
                    render={() => <h1>Decks: {this.props.name} </h1>}
                />
                <Route path="/decks/add" render={() => <h1>Add deck</h1>} />
            </div>
        );
    }
}
