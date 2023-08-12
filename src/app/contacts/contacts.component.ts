import { Component, Host } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //used for preloading component data

//Model
import { IContact } from '../model/icontact';

//Service
import { ContactService } from '../service/contact.service';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  constructor(private route: ActivatedRoute,
    //@Host() // limit to the host or parent component's instance
    //@Optional() // returns null if cannot find dependency
    private logger: LoggerService,
    private service: ContactService
    ){
      logger.logInfo("Contacts Component Constructor");
    }

  protected contacts: IContact[] = [];
  protected selectedContact!: IContact

  ngOnInit() {

    //preloaded contacts list
    this.route.data.subscribe(data => {
      this.contacts = data["contacts"];        
    });

    //load data post component load
    //this.service.getContacts().subscribe(contacts => this.contacts = contacts);

  }

  //return list of contacts from the Contacts service
  //get contacts() {
  //  return this.service.contacts;
  //}

  onSelect(contact: IContact): void {
    this.selectedContact = contact;
  }

}
