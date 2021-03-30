import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeItemComponent } from './theme-item/theme-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeListComponent,
    ThemeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
