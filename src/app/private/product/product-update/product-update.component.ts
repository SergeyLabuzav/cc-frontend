import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.product = activatedRoute.snapshot.data.product;
  }

  ngOnInit() {
  }

  save() {
    if (this.product.id) {
      this.productService.update(this.product).subscribe(() => this.navigateToProducts());
    } else {
      this.productService.save(this.product).subscribe(() => this.navigateToProducts());
    }
  }

  previousState() {
    window.history.back();
  }

  private navigateToProducts() {
    this.router.navigate(['/', 'product']);
  }
}
