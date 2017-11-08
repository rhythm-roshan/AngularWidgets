import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WidgetServicesComponent} from './widget-services/widget-services.component';
import {HomeComponent} from './widget-services/home/home.component';
import {AboutComponent} from './widget-services/about/about.component';
import {ListDetailComponent} from './widget-services/list-detail/list-detail.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {WidgetlistService} from "./widgetlist.service";

const approutes = [
  {
    path: "", redirectTo: '/home', pathMatch: 'full'
  },

  {
    path: "home", component: WidgetServicesComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "**", component: WidgetServicesComponent
  }


];


@NgModule({
  declarations: [
    AppComponent,
    WidgetServicesComponent,
    HomeComponent,
    AboutComponent,
    ListDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(approutes)

  ],
  providers: [WidgetlistService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
