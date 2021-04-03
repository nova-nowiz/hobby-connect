import { Component, OnInit } from '@angular/core';
import { Theme } from '../theme';
import { ThemesService } from '../themes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css'],
})
export class ThemeListComponent {
  themes$: Observable<Theme[]>;

  constructor(private themeService: ThemesService) {
    this.themes$ = this.themeService.getThemes();
  }
}
