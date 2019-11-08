import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {MessageService} from './message.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit , OnChanges {
  @Input() state: string;
  @Input() route: string;
  @Input() data: string;
  @Output() routerChanges = new EventEmitter();
  @Output() order = new EventEmitter();
  constructor(
    private router: Router,
    private messageService: MessageService
    ) {

  }

  ngOnInit(): void {
    this.router.events.subscribe(e => {
    if (e instanceof NavigationEnd) {
      this.routerChanges.emit(e);
    }
  });
    this.router.initialNavigation();

    window.addEventListener('back_click', ( event: CustomEvent) => {
      console.log('Event with message from produkt: ', event.detail.message);
    });
    window.addEventListener('back-event', (event) => {

      console.log('Event without message from produkt: ', event);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.route) {
      console.log('test detect order changes, route', JSON.parse(this.route).url);
      this.router.navigate([JSON.parse(this.route).url]);
    }
    if (changes.data && changes.data.currentValue !== 'init') {
      console.log('data changes in order, data', JSON.parse(this.data));
      this.messageService.setData(JSON.parse(this.data));
    }
  }
}
