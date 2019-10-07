import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {MessageService} from '../../message.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  selected = 1;
  @Output() routerChanges = new EventEmitter();

  item;
  amount: number[] = [];
  subscription: Subscription;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private messageService: MessageService) { }

  ngOnInit() {
    this.subscription = this.route.params
    .subscribe(params => {
      const id = params.id || '';
      console.log('test subscribe params id', id);
      this.http.get('http://localhost:4000/item/' + id).subscribe(
        data => {
          this.item = data[0];
          for (let i = 0; i < data[0].amount ; i++) {
            this.amount.push(i + 1);
          }
        }
      );
    });
  }

  onBackClick() {
    this.router.navigate(['module-a']).then( () => {
        this.router.initialNavigation();
    });
  }

  setQuantity(value) {
    console.log('amount event', value);
  }


  onBuyClick() {
    console.log('check on buy click in details');
    const order = {item: this.item, amount: this.selected};
    this.messageService.order(order);
    const orderData = {};
    this.router.navigate(['order']);
  }

}
