import {Component, OnInit} from '@angular/core';
import {GraphQLService} from "../../services/graphql.service";
import {GET_THEMES, GET_USER_ACTIVITY} from "../../graphql/queries";
import {Theme} from "../../models/theme";
import {Activity} from "../../models/activity";
import {MeService} from "../../services/me.service";

@Component({
  selector: 'app-groups',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  activities: Activity[] = [];


  constructor(private graphqlService: GraphQLService, private meService: MeService) {
  }

  ngOnInit() {
    this.graphqlService
      .execute(GET_USER_ACTIVITY, {id_user: this.meService.resolve()?.id})
      .then((result) => (this.activities = result.data.activity))
      .catch((error) => console.log(error));
  }
}
