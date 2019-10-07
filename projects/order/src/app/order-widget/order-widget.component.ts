import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-order-widget',
  templateUrl: './order-widget.component.html',
  styleUrls: ['./order-widget.component.css']
})
export class OrderWidgetComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log('hello from order widget');
  }

}
