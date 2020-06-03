import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  someData = {"name":"Hello"};
  private firstMessage = new BehaviorSubject(this.someData);

  public currentMessage = this.firstMessage.asObservable();

  updateMessage(message){
    this.firstMessage.next(message);
  }

}
