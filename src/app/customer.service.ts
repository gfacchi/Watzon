import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from './customer';
import 'rxjs/add/operator/toPromise';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CustomerService {

  private customersUrl = `http://10.210.5.172:8080/customers`;

  constructor(
    private httpClient: HttpClient,
    private http: Http
    // messageService
  ) { }

  public sharedCustomers: Customer[];

  private static getHeaders() {
    const headers =  new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  getCustomers(): Promise<Customer[]> {
    return this.http.get(this.customersUrl, {headers: CustomerService.getHeaders()})
    .toPromise().then(response => {
      this.sharedCustomers = response.json()._embedded.customers as Customer[];
      return response.json()._embedded.customers as Customer[];
    });
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `${this.customersUrl}/${id}`;
    return this.httpClient.get<Customer>(url);
  }

  searchCustomers(term: string): Promise<Customer[]> {
    if (!term.trim()) {
      this.getCustomers();
    }
    return this.http.get(`${this.customersUrl}/search/searchlike?name=${term}`, {headers: CustomerService.getHeaders()})
      .toPromise().then(response => {
        this.sharedCustomers = response.json()._embedded.customers as Customer[];
        return response.json()._embedded.customers as Customer[];
    });
  }
}
