import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.directive';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';
import { Input } from '@angular/core/src/metadata/directives';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  @ViewChild('lgModal') public lgModal: ModalDirective;

  contacts: Contact[];

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactsService,
    private location: Location
  ) { }

  showModal() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contactService.getContacts(id).then(contacts => this.contacts = contacts);
    this.lgModal.show();
  }
}
