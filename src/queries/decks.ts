import gql from 'graphql-tag';

export default gql`
    {
        decks {
            title
            description
        }
    }
`;
