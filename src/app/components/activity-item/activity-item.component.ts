import {Component, Input, OnInit} from '@angular/core';
import {Activity} from "../../models/activity";

@Component({
  selector: 'app-groups-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css'],
})
export class ActivityItemComponent implements OnInit {
  @Input() activity: Activity | undefined;

  ngOnInit() {
    console.log(this.activity?.count);
  }
}
