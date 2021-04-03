import { Component, OnInit } from '@angular/core';
import { Group } from '../../models/Group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
})
export class GroupsComponent {
  items: Group[];

  constructor() {
    this.items = [
      new Group(
        1,
        'Scribble.io',
        'Vendredi 20, 20h00',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus'
      ),
      new Group(
        2,
        'Cuisine',
        'Samedi 21, 21h00',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus'
      ),
      new Group(
        3,
        'Serie',
        'Samedi 21, 21h00',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus'
      ),
    ];
  }
}
