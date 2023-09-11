import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: any[] = [];
  private storage: Storage;

  constructor() { 
    this.storage= window.localStorage;
  }

  addContact(contact: any) {
    const existingContact = this.contacts.find(c => c.email === contact.email);
    if (existingContact) {
      existingContact.properties.push(contact.property);
    } else {
      this.contacts.push({
        email: contact.email,
        name: contact.name,
        lastName: contact.lastName,
        properties: [contact.property]
      });
    }
  }
  getContacts() {
    let teste= this.storage.getItem('contact') ?? "";
    console.log("teste",(JSON.parse(teste)))
    console.log("teste2", this.storage.getItem("property"))
    console.log("teste3", this.storage.getItem("properties"))
    return JSON.parse(teste);
  }
}


