
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginpageComponent } from './shared/loginpage/loginpage.component';
import { DataComponent } from './core/data/data.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { FirstdashComponent } from './core/dashboard/firstdash/firstdash.component';
import { SeconddashComponent } from './core/dashboard/seconddash/seconddash.component';



import { routes } from './app-routing';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    DataComponent,
    DashboardComponent,
    FirstdashComponent,
    SeconddashComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    HttpModule,
     ReactiveFormsModule,
     routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
