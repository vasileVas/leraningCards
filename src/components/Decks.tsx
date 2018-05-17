import * as React from 'react';
import { Route } from 'react-router-dom';
import { Card } from './Card';

export default class Decks extends React.Component {
    public render() {
        return (
            <>
                <Route
                    exact={true}
                    path="/decks"
                    render={() => (
                        <>
                            <h1>Decks</h1>
                            <div className="row">
                                <Card title="JS" description="... JS ..." />
                                <Card
                                    title="ReactJS"
                                    description="... React ..."
                                />
                            </div>
                        </>
                    )}
                />
                <Route path="/decks/add" render={() => <h1>Add deck</h1>} />
            </>
        );
    }
}
