import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class MessageService {
  // Observable string sources
  private ordered = new Subject<object>();

  // Observable string streams
  orderCompleted$ = this.ordered.asObservable();

  order(message: object) {
    this.ordered.next(message);
  }

  clearOrder() {
    this.ordered.next();
  }
  constructor() { }

}
