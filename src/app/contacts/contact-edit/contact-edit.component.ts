import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//model
import { IContact } from 'src/app/model/icontact';

//Service
import { LoggerService } from 'src/app/service/logger.service';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  //dependecy inject ActivatedRoute and LoggerService
  constructor(private route: ActivatedRoute
    , private logger: LoggerService
    , private service: ContactService) {

  }

  protected contact: any;

  ngOnInit(): void {

    this.logger.logInfo("Contact Edit Component init");

    //this.contact = this.route.snapshot.data["contact"];

    this.route.data.subscribe(data => {
        this.contact = data["contact"];        
      });
    this.logger.logInfo("Contact Edit Component - Contact: " + this.contact.id);
  }

  editContactCallback(contact: IContact){
    this.service.updateContact(contact);
  }

}
