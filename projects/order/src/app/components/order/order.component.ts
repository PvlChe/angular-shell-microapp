import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {log} from 'util';
import {MessageService} from '../../services/message.service';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  anrede;
  data: {
    user: any,
    item: any
  };
  amount;
  adresse = '';
  plz = '';
  ort = '';

  constructor(
    private router: Router,
    private messageService: MessageService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.setData();
  }

  setData() {
    this.data = { user: this.messageService.getUser(), item: this.messageService.getItem()};
    this.amount = this.messageService.getAmount();
  }

  onCancelClick() {
    const event = new CustomEvent('route', {detail: {route: 'product'}});
    window.dispatchEvent(event);
  }

  onSaveClick() {
    this.saveOrder();
  }

  saveOrder() {
    const data = {
      userID: this.data.user._id,
      itemID: this.data.item._id,
      itemAmount: this.data.item.amount,
      orderedAmount: this.amount,
      itemModel: this.data.item.model,
      itemBrand: this.data.item.brand,
      itemColor: this.data.item.color,
      itemVolume: this.data.item.volume,
      email: this.data.user.email,
      adresse: this.adresse,
      plz: this.plz,
      ort: this.ort,
    };

    this.orderService.saveOrder(data).subscribe( () => {}, () => {},
      () => {
        const event = new CustomEvent('route', {detail: {route: 'dashboard'}});
        window.dispatchEvent(event);
      }
    );
  }

}

