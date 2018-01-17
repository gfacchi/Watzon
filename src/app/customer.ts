import { City } from './city';
import { Contact } from './contact';

export class Customer {
  id: number;
  name: string;
  street: string;
  city: string;
  note: string;
  website: string;
  code: string;
  contacts: Contact[];
}
