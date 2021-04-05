import { gql } from 'apollo-angular';

export const CHECK_USER = gql`
  query CheckUser($id: Int!) {
    user_by_pk(id: $id) {
      id
    }
  }
`;
