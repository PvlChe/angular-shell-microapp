import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient,
  ) { }

  getOrder(id: string) {
    return this.http.get<any>('http://localhost:4002/order/' + id);
  }

  saveOrder(data) {
    const update = this.http.put<any>('http://localhost:4000/item/' + data.itemID, {amount: data.itemAmount - data.orderedAmount});
    const save = this.http.post<any>('http://localhost:4002/order/', data);
    return forkJoin([update, save]);
  }

}
