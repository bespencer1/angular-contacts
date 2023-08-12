import { Injectable } from '@angular/core';
import { IContact } from '../model/icontact';
import { Contact } from '../model/contact';
import { Observable, of } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts!: Observable<Array<IContact>>; 

  //add dependency injected services
  constructor(private logger: LoggerService) { }

  //return contacts list for contacts component
  getContacts(): Observable<IContact[]> {
    this.logger.logInfo("Contact Service: Getting Contacts");

    if(!this.contacts) {
      this.contacts = of([
        {id: "a", email: "test1@test.com", name: "Test User 1"}
        ,{id: "b", email: "test2@test.com", name: "Test User 2"}
      ]);
    }

    return this.contacts;
  }
  
  //return contact for contact edit component
  getContact(id: string): Observable<IContact> {
    this.logger.logInfo("Contact Service: Get Contact for ID: " + id);

    if(this.contacts) {
      let contactList: IContact[] = []; //let if prefered over var
      this.contacts.subscribe(contacts => contactList = contacts);    
      return of(contactList.find(contact => contact.id === id)!);  
    }
    else {
      this.logger.logError("Returning empty contact");
      return of(new Contact('','',''));
    }
    
  }

  //add contact function for contact add component
  addContact(contact: IContact){
    //this.contacts.push(contact);
    this.logger.logInfo("Contact Service: Add new contact. Name: " + contact.name);

    let newContacts: IContact[] = []; //let is prefered over var

    if(this.contacts) {
      this.contacts.subscribe(contacts => newContacts = contacts);      
    }

    newContacts.push(contact);
    this.contacts = of(newContacts);
    
  }

  //update contact function for contact edit component
  updateContact(contact: IContact){
    this.logger.logInfo("Contact Service: Update contact. Name: " + contact.name);
  }

}
