import { gql } from 'apollo-angular';

export const GET_USER_ACTIVITY = gql`
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
