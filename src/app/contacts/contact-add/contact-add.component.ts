import { Component } from '@angular/core';

//model
import { IContact } from 'src/app/model/icontact';

//Services
import { ContactService } from 'src/app/service/contact.service';
import { LoggerService } from 'src/app/service/logger.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent {

  constructor(private logger: LoggerService
    , private service: ContactService
    ){
    this.logger.logInfo("Displaying Contact Add Component");
  }

  addContactCallback(contact: IContact){
    this.service.addContact(contact);
  }

}
