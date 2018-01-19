import { Component, OnInit } from '@angular/core';
import { Customer } from '..//customer';
import { CustomerService } from '../customer.service';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit, DoCheck {

  customers: Customer[];

  constructor(
    private customerService: CustomerService,
    private alertService: AlertService
  ) { }

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
