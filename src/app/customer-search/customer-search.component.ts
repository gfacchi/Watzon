import { Component, OnInit } from '@angular/core';
import { Promise } from 'q';
import { Customer } from '..//customer';
import { Subject } from 'rxjs/Subject';
import { CustomerService } from '../customer.service';
import { Observable } from 'rxjs/Observable';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
    private productService: ProductService
  ) { }

  search(term: string): void {
    this.customerService.searchCustomers(term);
  }

  searchProduct(term: string): void {
    this.productService.getProducts();
  }

  ngOnInit() {
  }
}
