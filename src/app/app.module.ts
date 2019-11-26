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
import { LocationResolve } from './private/dictionaries/services/location.resolve';
import { EmployeeResolve } from './private/employee/service/employee.resolve';
import { ProductListComponent } from './private/product/product-list/product-list.component';
import { ProductInfoComponent } from './private/product/product-info/product-info.component';
import { ProductUpdateComponent } from './private/product/product-update/product-update.component';
import { ProductResolve } from './private/product/service/product.resolve';
import { EmployeeListComponent } from './private/employee/employee-list/employee-list.component';
import { EmployeeInfoComponent } from './private/employee/employee-info/employee-info.component';
import { EmployeeUpdateComponent } from './private/employee/employee-update/employee-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    LocationComponent,
    LocationInfoComponent,
    ProductListComponent,
    ProductInfoComponent,
    ProductUpdateComponent,
    EmployeeListComponent,
    EmployeeInfoComponent,
    EmployeeUpdateComponent
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
      },
      {
        path: 'product',
        children: [
          {
            path: '',
            component: ProductListComponent
          },
          {
            path: 'new',
            component: ProductUpdateComponent,
            resolve: {
              product: ProductResolve
            }
          },
          {
            path: ':id/edit',
            component: ProductUpdateComponent,
            resolve: {
              product: ProductResolve
            }
          },
          {
            path: ':id/view',
            component: ProductInfoComponent,
            resolve: {
              product: ProductResolve
            }
          }
        ]
      },
      {
        path: 'employee',
        children: [
          {
            path: '',
            component: EmployeeListComponent
          },
          {
            path: 'new',
            component: EmployeeUpdateComponent,
            resolve: {
              employee: EmployeeResolve,
              locations: LocationResolve
            }
          },
          {
            path: ':id/edit',
            component: EmployeeUpdateComponent,
            resolve: {
              employee: EmployeeResolve,
              locations: LocationResolve
            }
          },
          {
            path: ':id/view',
            component: EmployeeInfoComponent,
            resolve: {
              employee: EmployeeResolve
            }
          }
        ]
      }
    ]),
    FormsModule
  ],
  providers: [],
  entryComponents: [LocationInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
