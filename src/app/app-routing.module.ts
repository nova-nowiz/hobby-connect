import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeListComponent } from './components/theme-list/theme-list.component';
import { GroupsComponent } from './components/groups/groups.component';

const routes: Routes = [
  { path: 'themes', component: ThemeListComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
