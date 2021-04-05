import {Component} from '@angular/core';
import {Theme} from '../../models/theme';
import {ThemesService} from '../../services/themes.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css'],
})
export class ThemeListComponent {
  themes$: Observable<Theme[]>;
  selected: Theme[];

  constructor(private themeService: ThemesService) {
    this.themes$ = this.themeService.getThemes();
    this.selected = [];
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
    // TODO
  }
}
