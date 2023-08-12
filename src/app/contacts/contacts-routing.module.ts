import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

//Service
import { ContactService } from '../service/contact.service';

//Components
import { ContactsComponent } from './contacts.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';


const routes: Routes = [
  { path: ''
    , component: ContactsComponent 
    , resolve: {contacts: () => inject(ContactService).getContacts()}
  },
  { path: 'add'
    , component: ContactAddComponent 
  },
  //use resolve to preload/inject the contact information from the service
  { path: 'edit/:id'
    , component: ContactEditComponent 
    , resolve: {contact: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(ContactService).getContact(route.paramMap.get('id')!)}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
