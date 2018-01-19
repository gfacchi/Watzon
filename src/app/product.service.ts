import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductService {

  private customersUrl = `http://10.210.5.53:8080/customers`;

  constructor(
    private httpClient: HttpClient,
    private http: Http
    // messageService
  ) { }

  private static getHeaders() {
    const headers =  new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  getProducts(id): Promise<Product[]> {
    return this.http.get(`${this.customersUrl}/${id}/products `, {headers: ProductService.getHeaders()})
    .toPromise().then(response => response.json()._embedded.contacts as Product[]);
  }
}
