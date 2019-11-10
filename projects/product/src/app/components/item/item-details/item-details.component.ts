import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {MessageService} from '../../../services/message.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  selected = 1;
  item;
  amount: number[] = [];
  subscription: Subscription;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {
    this.subscription = this.route.params
    .subscribe(params => {
      const id = params.id || '';
      this.getItem(id);
    });
  }

  getItem(id: string) {
    this.http.get('http://localhost:4000/item/' + id).subscribe(
      data => {
        this.item = data[0];
        this.setAmount();
      }
    );
  }

  setAmount() {
    for (let i = 0; i < this.item.amount ; i++) {
      this.amount.push(i + 1);
    }
  }

  onBackClick() {
    this.router.navigate(['product']);
  }

  onBuyClick() {
    if (localStorage.userID) {
      const event = new CustomEvent('route', {detail: {route: 'order', orderData:  {item: this.item, amount: this.selected}}});
      window.dispatchEvent(event);
    } else {
      const event = new CustomEvent('route', {detail: {route: 'login'}});
      window.dispatchEvent(event);
    }
  }
}
