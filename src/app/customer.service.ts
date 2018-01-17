import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from './customer';

@Injectable()
export class CustomerService {

  private customersUrl = `http://localhost:3000/customers`;

  constructor(
    private http: HttpClient
    // messageService
  ) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl);
  }
}
