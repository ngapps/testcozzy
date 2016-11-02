import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboardv2Component } from './dashboard/dashboardv2.component';
import { Dashboardv3Component } from './dashboard/dashboardv3.component';
import { FooterComponent } from './share/footer.component';
import { HeaderComponent } from './share/header.component';
import { AsideComponent } from './share/aside.component';
import { routing } from './app.routing';
import { LayoutsComponent } from './layouts/layouts.component';

import { AsideitemComponent } from './share/asideitem.component';
import { DropdownDirective } from './dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    AsideComponent,
    LayoutsComponent,
    Dashboardv2Component,
    Dashboardv3Component,
    AsideitemComponent,
    DropdownDirective 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
