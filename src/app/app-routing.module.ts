import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ThemeListComponent} from "./theme-list/theme-list.component";
import {GroupsComponent} from "./groups/groups.component";

const routes: Routes = [
  {path: 'themes', component:ThemeListComponent},
  {path: 'groups', component: GroupsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
