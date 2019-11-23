import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { LocationComponent } from './private/dictionaries/location/location.component';
import { LocationInfoComponent } from './private/dictionaries/location/location-info/location-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    LocationComponent,
    LocationInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'location',
        component: LocationComponent
      }
    ]),
    FormsModule
  ],
  providers: [],
  entryComponents: [LocationInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
