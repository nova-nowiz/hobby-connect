export const GET_USER_ACTIVITY = `
query GetUserActivity($id_user: Int!) {
  activity(where: { user_activities: { id_user: { _eq: $id_user } } }) {
    id
    id_theme
    theme {
      theme
    }
    user_activities_aggregate {
      aggregate {
        count
      }
    }
  }
}
`;

export const CHECK_USER = `
  query CheckUser($id: Int!) {
    user_by_pk(id: $id) {
      id
    }
  }
`;

export const GET_THEMES = `
  query GetThemes {
    theme {
      id
      theme
    }
  }
`;

export const ASSIGN_USER_THEME = `
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
