import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as data from '../shared/json/json.json';

@Injectable()
export class MessageService {
  private subject = new Subject<any>();

  sendMessage(cv: object) {
    this.subject.next([cv]);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
