import { Component, OnInit } from '@angular/core';
import { Customer } from '..//customer';
import { CustomerService } from '../customer.service';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit, DoCheck {

  customers: Customer[];
  private show: boolean;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers().then(customers => this.customers = customers);
  }

  ngDoCheck(): void {
    if (this.customerService.sharedCustomers !== this.customers) {
      this.customers = this.customerService.sharedCustomers;
    }
  }
}
