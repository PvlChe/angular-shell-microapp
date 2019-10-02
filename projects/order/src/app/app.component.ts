import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';

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
    this.router.initialNavigation();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('order changes', changes);
    console.log('test detect order changes, state', this.state);
    if (changes.route) {
      this.router.navigate([JSON.parse(this.route).url]);
    }
  }
}
