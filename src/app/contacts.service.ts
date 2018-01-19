import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from './customer';
import 'rxjs/add/operator/toPromise';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ContactsService {

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

  getContacts(id): Promise<Contact[]> {
    return this.http.get(`${this.customersUrl}/${id}/contacts `, {headers: ContactsService.getHeaders()})
    .toPromise().then(response => response.json()._embedded.contacts as Contact[]);
  }
}
