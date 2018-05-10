import * as React from 'react';

interface IProps {
    name: string;
}

export default class Decks extends React.Component<IProps> {
    public render() {
        return <h1>Decks: {this.props.name} </h1>;
    }
}
