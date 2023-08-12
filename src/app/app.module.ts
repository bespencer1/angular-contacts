import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Services
import { LoggerService } from './service/logger.service';
import { BrowserStorageService } from './service/storage.service';

//Components
import { HomeComponent } from './home/home.component';

//Utilities
import { AppRouteReuseStrategy } from './utils/app-route-reuse-strategy';
import { RouteReuseStrategy } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, //bootstrap module
  ],
  providers: [LoggerService, 
    BrowserStorageService,
    {
    provide: RouteReuseStrategy,
    useClass: AppRouteReuseStrategy,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
