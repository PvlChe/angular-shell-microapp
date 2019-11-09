import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-order-widget',
  templateUrl: './order-widget.component.html',
  styleUrls: ['./order-widget.component.css']
})
export class OrderWidgetComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  orders;
  ngOnInit() {
    this.getOrder(localStorage.userID).subscribe(
      data => {
        this.orders = data;
      }
    );
  }

  getOrder(id: string) {
    return this.orderService.getOrder(id);
  }
}
