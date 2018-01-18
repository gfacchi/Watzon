import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';
import { City } from '../city';
import { CustomerService } from '../customer.service';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { Contact } from '../contact';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  @Input() customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomer(id)
    .subscribe(customer => this.customer = customer);
  }

  goBack(): void {
    this.location.back();
  }
}
