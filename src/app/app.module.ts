import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
