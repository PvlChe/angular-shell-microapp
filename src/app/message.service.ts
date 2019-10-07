import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class MessageService {
  // Observable string sources
  private user;

  // Observable string streams
  getUser() {
    return this.user;
  }

  signIn(user: object) {
    this.user = user;
  }

  clearUser() {
    this.user = undefined;
  }

  constructor() { }
}
