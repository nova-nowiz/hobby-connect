import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../../models/Group';

@Component({
  selector: 'app-groups-item',
  templateUrl: './groups-item.component.html',
  styleUrls: ['./groups-item.component.css'],
})
export class GroupsItemComponent {
  @Input() item: Group | undefined;
}
