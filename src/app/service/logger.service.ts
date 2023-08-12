import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logInfo(message: any){
    console.log(message);
  }

  logError(message: any){
    console.error(message);
  }
}
