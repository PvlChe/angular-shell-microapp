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
  data;
  adresse = '';
  plz = '';
  ort = '';

  constructor(
    private router: Router,
    private messageService: MessageService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    console.log('order init');
    console.log('this.messageService.getData()', this.messageService.getData());
    this.data = this.messageService.getData();
  }

  onSaveClick() {
    console.log('test a click');
    console.log(this.data);
    const data = {
      userID: this.data.user._id,
      itemID: this.data.item.item._id,
      itemModel: this.data.item.item.model,
      itemBrand: this.data.item.item.brand,
      itemColor: this.data.item.item.color,
      itemVolume: this.data.item.item.volume,
      email: this.data.user.email,
      adresse: this.adresse,
      plz: this.plz,
      ort: this.ort,
    };

    this.orderService.saveOrder(data).subscribe(
      dataRes => {
        console.log('data', dataRes);
        this.router.navigate(['product']);
      },
      error => {
        console.log('error', error);
      }
    );
  }

}

