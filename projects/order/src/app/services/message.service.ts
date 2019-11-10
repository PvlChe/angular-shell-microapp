import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class MessageService {
  private user;
  private item;
  private amount;

  setUser(user: object) {
    this.user = user;
  }

  setItem(item: object) {
    this.item = item;
  }

  setAmount(amount: object) {
    this.amount = amount;
  }

  getAmount() {
    return this.amount;
  }

  getUser() {
    return this.user;
  }

  getItem() {
    return this.item;
  }

  clearUserData() {
    this.user = undefined;
  }

  clearItemData() {
    this.item = undefined;
  }

  constructor() { }
}
