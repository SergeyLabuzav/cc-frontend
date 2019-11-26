import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  dataSource: MatTableDataSource<Product>;
  displayedColumns = ['id', 'code', 'shortName', 'actions'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.productService.fetchAll().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  delete(id: number) {
    this.productService.delete(id).subscribe();
  }
}
