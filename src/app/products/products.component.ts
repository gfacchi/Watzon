import { Component, OnInit } from '@angular/core';
import { Product } from '..//product';
import { ProductService } from '../product.service';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit, DoCheck {

  products: Product[];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProducts(id).then(products => this.products = products);
  }

  ngDoCheck(): void {
    /*if (this.customerService.sharedCustomers !== this.customers) {
      this.customers = this.customerService.sharedCustomers;
    }*/
  }
}
