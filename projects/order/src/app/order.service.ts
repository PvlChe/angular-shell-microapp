import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
    return this.http.post<any>('http://localhost:4002/order/', data);
  }
}
