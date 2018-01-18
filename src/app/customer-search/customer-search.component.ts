import { Component, OnInit } from '@angular/core';
import { Promise } from 'q';
import { Customer } from '..//customer';
import { Subject } from 'rxjs/Subject';
import { CustomerService } from '../customer.service';
import { Observable } from 'rxjs/Observable';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {

  customers$: Observable<Customer[]>;
  private searchTerms = new Subject<string>();

  constructor(private customerService: CustomerService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.customers$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.customerService.searchCustomers(term))
    );
  }
}
