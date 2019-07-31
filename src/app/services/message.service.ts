import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MessageService {
  private subject = new Subject<any>();

  sendMessage(name: string, profesion: string, cv: object) {
    this.subject.next({
      name: name,
      profesion: profesion,
      cv: cv
    });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
