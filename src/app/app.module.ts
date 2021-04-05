import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {GraphQLModule} from './graphql.module';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ActivitiesComponent} from './components/activities/activities.component';
import {ActivityItemComponent} from './components/activity-item/activity-item.component';

import {ThemeListComponent} from './components/theme-list/theme-list.component';
import {ThemeItemComponent} from './components/theme-item/theme-item.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeListComponent,
    ThemeItemComponent,
    ActivitiesComponent,
    ActivityItemComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    HttpClientModule,
    GraphQLModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
