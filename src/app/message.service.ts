import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class MessageService {
  // Observable string sources
  private logged = new Subject<object>();

  // Observable string streams
  userCompleted$ = this.logged.asObservable();

  signIn(user: object) {
    this.logged.next(user);
  }

  clearUser() {
    this.logged.next();
  }

  constructor() { }
}
