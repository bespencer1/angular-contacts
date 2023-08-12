import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //add to use Forms

//Contacts feature routing
import { ContactsRoutingModule } from './contacts-routing.module';

//Feature Module services/  If service should be available in other modules, add to root module instead.
import { ContactService } from '../service/contact.service';

//Components
import { ContactsComponent } from './contacts.component';
import { ContactDetailViewComponent } from './contact-detail-view/contact-detail-view.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactReactiveFormComponent } from './contact-reactive-form/contact-reactive-form.component';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactDetailViewComponent,
    ContactAddComponent,
    ContactReactiveFormComponent,
    ContactEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, //add to use Forms
    ContactsRoutingModule    
  ],
  providers: [
    ContactService
  ]
})
export class ContactsModule { }
