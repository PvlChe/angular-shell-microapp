import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setEventListeners();
    this.router.initialNavigation();
  }

  setEventListeners() {
    window.addEventListener('route', (event: CustomEvent) => {
      console.log('###DEBUG_PRODUCT: route event: ', event);
      this.router.navigate([event.detail.route]);
    });
  }
}
