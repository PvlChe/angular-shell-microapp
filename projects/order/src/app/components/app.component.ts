import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.setEventListeners();
    this.router.initialNavigation();
  }

  setEventListeners() {
    window.addEventListener('route', (event: CustomEvent) => {
      console.log('###DEBUG_ORDER: route event: ', event);
      if (event.detail.orderData) {
        this.messageService.setItem(event.detail.orderData.item);
        this.messageService.setAmount(event.detail.orderData.amount);
        console.log('###DEBUG_ORDER: item data recieved');
      }
      this.router.navigate([event.detail.route]);
    });
    window.addEventListener('auth', (event: CustomEvent) => {
      console.log('###DEBUG_ORDER: auth event: ', event);
      if (event.detail.user) {
        this.messageService.setUser(event.detail.user);
        console.log('###DEBUG_ORDER: user data saved');
      }
    });
  }
}
