import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

//Model
import { Contact } from 'src/app/model/contact';

//Services
import { LoggerService } from 'src/app/service/logger.service';
import { ContactService } from 'src/app/service/contact.service';


@Component({
  selector: 'app-contact-reactive-form',
  templateUrl: './contact-reactive-form.component.html',
  styleUrls: ['./contact-reactive-form.component.css']
})
export class ContactReactiveFormComponent {

  @Input() contact: Contact = new Contact("c","","");
  @Input() contactCallBackFunction: any;

  constructor(
    private readonly router: Router
    , private logger: LoggerService
    , private service: ContactService
    ){
    this.logger.logInfo("Displaying Contact Reactive Form");
  }

  //newContact = new Contact("c","","");

  onSubmit(){
    this.logger.logInfo("Contact Form submitted");
    //this.service.addContact(this.contact);
    this.contactCallBackFunction(this.contact);
    this.router.navigate(["/","contacts"]);
  }
}
