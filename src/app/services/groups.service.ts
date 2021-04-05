import {Injectable} from '@angular/core';
import {Apollo, gql, QueryRef} from "apollo-angular";
import {Theme} from "../models/theme";
import {Group} from "../models/Group";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

const GET_GROUPS = gql`
  query GetThemes {
    theme {
      id
      theme
    }
  }
`;

interface ResponseGroup {
  theme: Group[];
}

@Injectable({
  providedIn: 'root'
})

export class GroupsService {
  constructor(private apollo: Apollo) {
  }

  getRefThemes(): QueryRef<ResponseGroup> {
    return this.apollo.watchQuery({
      query: GET_GROUPS,
    });
  }

  getThemes(): Observable<Theme[]> {
    return new Observable();
  }
}
