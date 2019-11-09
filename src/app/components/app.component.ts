import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user;
  config = {
    'module-product': {
      loaded: false,
      path: ['http://127.0.0.1:61268/main.js'],
      element: 'module-product'
    },
    'module-order': {
      loaded: false,
      path: ['http://127.0.0.1:60000/main.js'],
      element: 'module-order'
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.load('module-product');
    this.load('module-order');

    this.setListeners();
    this.setSubscribers();

    if (localStorage.userID) {
      this.getUser(localStorage.userID).subscribe( user => {
        this.user = user[0];
        setTimeout(() => this.sendAuthUser(), 1000);
      });
    }
  }

  private load(name: string): void {
    const configItem = this.config[name];

    if (configItem.loaded) { return; }

    const script = document.createElement('script');
    script.src = this.config[name].path;

    const content = document.getElementById('content');
    content.appendChild(script);

    const element: HTMLElement = document.createElement(configItem.element);
    content.appendChild(element);
    this.config[name].loaded = true;

    script.onerror = () => console.error(`error loading ${configItem.path}`);
  }

  private setListeners() {
    window.addEventListener('route', (event: CustomEvent) => {
      console.log('###DEBUG_SHELL: route event.detail.route: ', event.detail.route);
      this.router.navigate([event.detail.route]);
    });
  }

  private setSubscribers() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.onRouterChanged(e);
      }
    });
  }

  private getUser(id: string) {
    return this.userService.getUserByID(id);
  }

  private sendAuthUser() {
    const event = new CustomEvent('auth', {detail: {user: this.user}});
    window.dispatchEvent(event);
    console.log('###DEBUG_SHELL: auth-event was sended');
  }

  private onRouterChanged(event) {
    const routerEvent = new CustomEvent('route', { detail: { route: event.url}});
    window.dispatchEvent(routerEvent);
  }

  private signOut() {
    delete localStorage.userID;
    this.router.navigate(['login']);
  }

  private isLogged() {
    return !(localStorage.userID === undefined);
  }
}
