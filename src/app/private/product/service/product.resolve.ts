import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolve implements Resolve<Product> {

  constructor(private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id = route.params.id ? route.params.id : null;
    if (id) {
      return this.productService.find(id);
    }
    return of({} as Product);
  }

}
