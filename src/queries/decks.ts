import gql from 'graphql-tag';

export default gql`
    {
        decks {
            id
            title
            description
        }
    }
`;
