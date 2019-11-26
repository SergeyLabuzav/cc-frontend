import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  product: Product;

  constructor(private activatedRoute: ActivatedRoute) {
    this.product = activatedRoute.snapshot.data.product;
  }

  ngOnInit() {
  }

  previousState() {
    window.history.back();
  }
}
