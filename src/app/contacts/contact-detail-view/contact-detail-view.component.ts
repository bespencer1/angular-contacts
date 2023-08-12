import { Component, Input } from '@angular/core';
import { IContact } from 'src/app/model/icontact';
import { LoggerService } from 'src/app/service/logger.service';

@Component({
  selector: 'app-contact-detail-view',
  templateUrl: './contact-detail-view.component.html',
  styleUrls: ['./contact-detail-view.component.css']
})
export class ContactDetailViewComponent {

  @Input() contact?: IContact;

  constructor(private logger: LoggerService){
    this.logger.logInfo("Displaying Contact Detail View component");
  }

}
