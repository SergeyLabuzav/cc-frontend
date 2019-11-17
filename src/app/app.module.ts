import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ProductListComponent } from './private/product/product-list/product-list.component';
import { HomeComponent } from './private/home/home.component';
import { EmployeeListComponent } from './private/employee/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeInfoComponent } from './private/employee/employee-info/employee-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    EmployeeListComponent,
    EmployeeInfoComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'product',
          component: ProductListComponent
        },
        {
          path: 'employee',
          children: [
            {
              path: '',
              component: EmployeeListComponent,
            },
            {
              path: 'new',
              component: EmployeeInfoComponent
            }
          ]
        }
      ]
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
