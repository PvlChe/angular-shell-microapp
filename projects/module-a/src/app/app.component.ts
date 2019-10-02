import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit , OnChanges {
  @Input() state: string;
  @Input() route: string;
  @Input() data: string;
  @Output() routerChanges = new EventEmitter();

  constructor(private router: Router) {

  }

  ngOnInit(): void {
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
      this.router.navigate([JSON.parse(this.route).url]);
    }

  }
}
