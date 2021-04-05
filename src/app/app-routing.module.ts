import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeListComponent } from './components/theme-list/theme-list.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'themes', component: ThemeListComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
