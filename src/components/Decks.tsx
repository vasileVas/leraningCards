import * as React from 'react';
import { Card } from './Card';
import allDecks from '../queries/decks';
import { Query } from 'react-apollo';

import { Props as CardProps } from './Card';

export interface Deck extends CardProps {
    id: number;
}

const Decks = () => (
    <Query query={allDecks}>
        {({ loading, error, data }) => {
            return (
                <>
                    <h1>Decks</h1>
                    <div className="row">
                        {data.decks &&
                            data.decks.map((deck: Deck) => (
                                <Card
                                    key={deck.id}
                                    title={deck.title}
                                    description={deck.description}
                                />
                            ))}
                    </div>
                </>
            );
        }}
    </Query>
);

export default Decks;
