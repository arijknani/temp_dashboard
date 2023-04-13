import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DashboardService } from './modules/dashboard.service';
import { DashboardComponent } from './modules/dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DashboardService,
    DashboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
