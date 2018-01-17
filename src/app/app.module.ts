import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerDetailService } from './customer-detail.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CustomerDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
