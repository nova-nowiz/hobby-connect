
import {Component, OnInit} from '@angular/core';
import {Theme} from "../models/Theme";

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent {
  items: Theme[];

  constructor() {
    this.items = [
      new Theme(1,"Movies"),
      new Theme(2,"Books"),
      new Theme(3,"Sports"),
      new Theme(1,"Travel"),
      new Theme(2,"Politic"),
      new Theme(3,"Corona"),
      new Theme(1,"Technologies"),
      new Theme(2,"Gaming"),
      new Theme(3,"Drama")
    ];
  }
}
