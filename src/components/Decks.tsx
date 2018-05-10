import * as React from 'react';

interface Props {
    name: string;
}

export default class Decks extends React.Component<Props> {
    public render() {
        return <h1>Decks: {this.props.name} </h1>;
    }
}
