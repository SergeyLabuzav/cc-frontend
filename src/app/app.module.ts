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
import { ProductListComponent } from './private/product/product-list/product-list.component';
import { ProductInfoComponent } from './private/product/product-info/product-info.component';
import { ProductUpdateComponent } from './private/product/product-update/product-update.component';
import { ProductResolve } from './private/product/service/product.resolve';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    LocationComponent,
    LocationInfoComponent,
    ProductListComponent,
    ProductInfoComponent,
    ProductUpdateComponent
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
      }
    ]),
    FormsModule
  ],
  providers: [],
  entryComponents: [LocationInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
