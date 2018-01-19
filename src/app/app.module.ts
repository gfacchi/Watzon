import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerService } from './customer.service';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';
import { ProductsComponent } from './products/products.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactCardComponent } from './contact-card/contact-card.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ContactsService } from './contacts.service';
import { ProductService } from './product.service';
import { AlertService } from './alert.service';

import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerDetailComponent,
    ProductsComponent,
    CustomerSearchComponent,
    ContactsComponent,
    ContactCardComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [CustomerService, ContactsService, ProductService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
