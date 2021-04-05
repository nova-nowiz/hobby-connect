import { gql } from 'apollo-angular';

export const GET_THEMES = gql`
  query GetThemes {
    theme {
      id
      theme
    }
  }
`;
