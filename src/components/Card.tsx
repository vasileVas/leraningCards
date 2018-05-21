import * as React from 'react';

export interface Props {
    title: string;
    description: string;
}

export const Card: React.SFC<Props> = props => (
    <div className="col s12 m6">
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{props.title}</span>
                <p>{props.description}</p>
            </div>
            <div className="card-action">
                <a href="#">Add Card</a>
                <a href="#">Start Deck</a>
            </div>
        </div>
    </div>
);
