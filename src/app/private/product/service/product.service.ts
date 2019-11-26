import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl: string = environment.apiUrl + 'product';

  constructor(private httpClient: HttpClient) {
  }

  fetchAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productUrl);
  }

  save(product: Product): Observable<void> {
    return this.httpClient.post<void>(this.productUrl, product);
  }

  find(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.productUrl + `/${id}`);
  }

  update(product: Product): Observable<void> {
    return this.httpClient.put<void>(this.productUrl, product);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.productUrl + `/${id}`);
  }
}
