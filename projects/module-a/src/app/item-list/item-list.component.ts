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
    this.http.get<any>('http://localhost:4000/item')
    .subscribe(item => {
      item = item.filter( phone => {
        console.log('phone amount', phone.amount);
        return phone.amount > 0;
      });
      console.log('items after map', item);
      this.items = item;
      console.log('test http get, items', item);
    });
  }

}
