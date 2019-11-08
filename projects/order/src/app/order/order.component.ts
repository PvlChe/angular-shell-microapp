import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {log} from 'util';
import {MessageService} from '../message.service';
import {OrderService} from '../order.service';

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
  adresse = '';
  plz = '';
  ort = '';

  constructor(
    private router: Router,
    private messageService: MessageService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.data = { user: this.messageService.getUser(), item: this.messageService.getItem()};
  }

  onSaveClick() {
    console.log('test a click');
    console.log(this.data);
    const data = {
      userID: this.data.user._id,
      itemID: this.data.item._id,
      itemModel: this.data.item.model,
      itemBrand: this.data.item.brand,
      itemColor: this.data.item.color,
      itemVolume: this.data.item.volume,
      email: this.data.user.email,
      adresse: this.adresse,
      plz: this.plz,
      ort: this.ort,
    };

    this.orderService.saveOrder(data).subscribe(
      dataRes => {
        console.log('data', dataRes);
        const event = new CustomEvent('route', {detail: {route: 'dashboard'}});
        window.dispatchEvent(event);
      },
      error => {
        console.log('error', error);
      }
    );
  }

}

