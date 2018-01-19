import { City } from './city';
import { Contact } from './contact';
import { Customer } from './customer';

export class CustomerProduct extends Customer {
  price: number;
  currency: string;
}
