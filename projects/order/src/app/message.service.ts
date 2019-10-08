import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class MessageService {
  private data;

  setData(data: object) {
    console.log('set data check#######, data: ', data);
    this.data = data;
  }

  getData() {
    return this.data;
  }

  clearData() {
    this.data = undefined;
  }

  constructor() { }
}
