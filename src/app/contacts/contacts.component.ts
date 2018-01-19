import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.directive';
import { CustomerService } from '../customer.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  @ViewChild('lgModal') public lgModal: ModalDirective;

  contacts: Contact[];

  constructor(
    private contactService: CustomerService
  ) { }

  showModal() {
    this.customerService.getCon().then(contacts => this.contacts = contacts)
    this.lgModal.show();
  }
}
