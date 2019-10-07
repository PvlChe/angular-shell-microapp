import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class MessageService {
  // Observable string sources
  private data = new Subject<object>();

  // Observable string streams
  dataCompleted$ = this.data.asObservable();

  setData(data: object) {
    console.log('set data check#######, data: ', data);
    this.data.next(data);
  }

  clearData() {
    this.data.next();
  }

  constructor() { }
}
