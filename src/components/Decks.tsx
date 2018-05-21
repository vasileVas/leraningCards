import * as React from 'react';
import { Card } from './Card';
import allDecks from '../queries/decks';
import { Query } from 'react-apollo';

const Decks = () => (
    <Query query={allDecks}>
        {({ loading, error, data }) => {
            return (
                <>
                    <h1>Decks</h1>
                    <div className="row">
                        {data.decks &&
                            data.decks.map(
                                (deck: {
                                    title: string;
                                    description: string;
                                }) => (
                                    <Card
                                        title={deck.title}
                                        description={deck.description}
                                    />
                                )
                            )}
                    </div>
                </>
            );
        }}
    </Query>
);

export default Decks;
