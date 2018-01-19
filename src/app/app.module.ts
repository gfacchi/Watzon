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

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerDetailComponent,
    ProductsComponent,
    CustomerSearchComponent,
    ContactsComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  providers: [CustomerService, ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
