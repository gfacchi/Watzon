import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: 'customers', component: CustomersComponent},
  {path: 'customers/:id', component: CustomerDetailComponent},
  {path: 'products', component: ProductsComponent},
  {path: '', redirectTo: '/customers', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
