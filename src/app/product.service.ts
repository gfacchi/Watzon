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

  private productsUrl = `http://10.210.5.53:8080/api`;

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

  getProducts(): Promise<Product[]> {
    return this.http.get(`${this.productsUrl}/products?full `, {headers: ProductService.getHeaders()})
    .toPromise().then(response => response.json() as Product[]);
  }

  /*searchProducts(term: string): Promise<Product[]> {
    if (!term.trim()) {
      this.getProducts();
    }
    return this.http.get(`${this.productsUrl}/search/searchlike?name=${term}`, {headers: CustomerService.getHeaders()})
      .toPromise().then(response => {
    }).catch(_ => {
      this.alertService.push('404');
      return []; });
  }*/
}
