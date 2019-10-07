import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {MessageService} from './message.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  template: '<router-outlet (buyItem)="onBuy($event)"></router-outlet>',
})
export class AppComponent implements OnInit , OnChanges {
  @Input() state: string;
  @Input() route: string;
  @Input() data: string;
  @Output() routerChanges = new EventEmitter();
  @Output() buy = new EventEmitter();

  subscription: Subscription;
  constructor(private router: Router,
              private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.subscription = this.messageService.orderCompleted$.subscribe( order => {
      console.log('ordered in main component, item: ', order);
      this.buy.emit(order);
    });
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.routerChanges.emit(e);
      }
    });
    this.router.initialNavigation();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('module-a changes', changes);
    console.log('test detect changes, state', this.state);
    if (changes.route) {
      console.log('check module-a route: ', JSON.parse(this.route).url);
      this.router.navigate([JSON.parse(this.route).url]);
    }

  }

  onBuy(event) {
    console.log('order main event on buy: ', event);
    this.buy.emit(event.value);
  }
}
