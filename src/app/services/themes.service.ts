import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Theme } from '../models/theme';
import { GET_THEMES } from '../graphql/queries';

interface ResponseTheme {
  theme: Theme[];
}

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  constructor(private apollo: Apollo) {}

  getRefThemes(): QueryRef<ResponseTheme> {
    return this.apollo.watchQuery({
      query: GET_THEMES,
    });
  }

  getThemes(): Observable<Theme[]> {
    return this.getRefThemes().valueChanges.pipe(
      map((result) => {
        console.log(result.data.theme);
        return result.data.theme;
      })
    );
  }
}
