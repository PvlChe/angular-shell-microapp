import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.http.get<any>('http://localhost:4000/item')
      .subscribe(item => {
        this.items = item.filter( phone => {
          return phone.amount > 0;
        });
      });
  }
}
