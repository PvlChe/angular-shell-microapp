import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-order-widget',
  templateUrl: './order-widget.component.html',
  styleUrls: ['./order-widget.component.css']
})
export class OrderWidgetComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  orders;
  ngOnInit() {
    this.orderService.getOrder(localStorage.userID).subscribe(
      data => {
        console.log('data from widget', data);
        this.orders = data;
      }
    );
  }
}
