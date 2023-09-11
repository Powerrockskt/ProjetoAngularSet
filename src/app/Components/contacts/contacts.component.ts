import { Component } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contacts: any[] = [];
  contact: any;

  constructor(private contactService: ContactsService) {

  }

  ngOnInit() {
      this.contacts = this.contactService.getContacts();
  }
}


