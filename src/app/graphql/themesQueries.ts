import { gql } from 'apollo-angular';

export const GET_THEMES = gql`
  query GetThemes {
    theme {
      id
      theme
    }
  }
`;

export const ASSIGN_USER_THEME = gql`
  mutation AssignThemeToUser(
    $user: Int!
    $themes: [user_theme_insert_input!]!
  ) {
    delete_user_theme(where: { id_user: { _eq: $user } }) {
      affected_rows
    }
    insert_user_theme(objects: $themes) {
      affected_rows
    }
  }
`;
