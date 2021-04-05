import { Component, OnInit } from '@angular/core';
import { Theme } from '../../models/theme';
import { GraphQLService } from '../../services/graphql.service';
import { GET_THEMES, ASSIGN_USER_THEME } from '../../graphql/queries';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css'],
})
export class ThemeListComponent implements OnInit {
  themes: Theme[] = [];
  selected: Theme[] = [];

  constructor(private graphqlService: GraphQLService) {}

  ngOnInit() {
    this.graphqlService
      .execute(GET_THEMES)
      .then((result) => (this.themes = result.data.theme))
      .catch((error) => console.log(error));
  }

  onClickTheme(theme: Theme) {
    if (this.selected.includes(theme)) {
      this.selected.splice(this.selected.indexOf(theme), 1);
    } else {
      if (this.selected.length < 3) {
        this.selected.push(theme);
      }
    }
  }

  registerSelectedThemes() {
    let userThemes = '[';
    for (let theme of this.selected) {
      userThemes += '{"id_theme":' + theme.id + ',"id_user":1}';
      if (this.selected.indexOf(theme) != this.selected.length - 1) {
        userThemes += ',';
      }
    }
    userThemes += ']';

    const param = JSON.parse(userThemes);

    this.graphqlService
      .execute(ASSIGN_USER_THEME, { user: 1, themes: param })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));

    // TODO
  }
}
