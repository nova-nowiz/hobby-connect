import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GraphQLService {
  async execute(query: String, variables = {}, headers = {}): Promise<any> {
    const fetchResponse = await fetch(environment.HASURA_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
      headers: {
        'x-hasura-admin-secret': environment.HASURA_KEY,
        ...headers,
      },
    });
    return await fetchResponse.json();
  }
}
