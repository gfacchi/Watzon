import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from './customer';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {

  constructor() { }

  updateCustomer() {

  }

  saveCustomer(name: string, surname: string, role: string, contacts[] ) {
    name = name.trim();
    surname = surname.trim();
    role = role.trim();

    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.saveCustomer();
  }
}
