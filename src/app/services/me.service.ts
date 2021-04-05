import {Injectable} from '@angular/core';
import {CHECK_USER} from '../graphql/queries';
import {User} from '../models/user';
import {GraphQLService} from './graphql.service';

@Injectable({
  providedIn: 'root',
})
export class MeService {
  private me: User | null | undefined;

  constructor(private graphqlService: GraphQLService) {
  }

  login(user: User) {
    this.me = user;
  }

  logout() {
    this.me = null;
  }

  resolve() {
    return this.me;
  }
}
