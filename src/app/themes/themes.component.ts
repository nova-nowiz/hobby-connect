import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Theme } from '../theme';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css'],
})
export class ThemesComponent implements OnInit {
  themes$: Observable<Theme[]>;

  constructor(private themeService: ThemesService) {
    this.themes$ = this.themeService.getThemes();
  }

  ngOnInit() {
    console.log('on init');
  }
}
