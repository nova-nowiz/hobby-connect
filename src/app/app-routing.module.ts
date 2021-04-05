import {LoginComponent} from './components/login/login.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ThemeListComponent} from './components/theme-list/theme-list.component';
import {ActivitiesComponent} from './components/activities/activities.component';
import {HomeComponent} from "./components/home/home.component";
import {MeService} from "./services/me.service";
import {AuthenticatedGuard} from "./authenticated.guard";
import {UnauthenticatedGuard} from "./unauthenticated.guard";

const routes: Routes = [
  {path: '', component: HomeComponent, resolve: {me: MeService}},
  {path: 'themes', component: ThemeListComponent, resolve: {me: MeService}, canActivate: [AuthenticatedGuard]},
  {path: 'activities', component: ActivitiesComponent, resolve: {me: MeService}, canActivate: [AuthenticatedGuard]},
  {path: 'login', component: LoginComponent, resolve: {me: MeService}, canActivate: [UnauthenticatedGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
