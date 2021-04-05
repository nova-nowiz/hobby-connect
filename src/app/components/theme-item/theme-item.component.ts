import { Component, Input } from '@angular/core';
import { Theme } from '../../models/theme';

@Component({
  selector: 'app-theme-item',
  templateUrl: './theme-item.component.html',
  styleUrls: ['./theme-item.component.css'],
})
export class ThemeItemComponent {
  @Input() theme: Theme | undefined;
  @Input() selected: Boolean = false;
}
