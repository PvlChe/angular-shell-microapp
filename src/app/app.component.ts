import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StateService} from './state.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {MessageService} from './message.service';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private stateService: StateService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private userService: UserService
  ) {
  }
  user;
  @Output() routerChanged: EventEmitter<any> = new EventEmitter();

  title = 'shell-app';
  state = 'module-';

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

  ngOnInit() {
    if (localStorage.userID) {
      this.userService.getUserByID(localStorage.userID).subscribe( user => {
        console.log('get user in main from localStorage: ', user);
        this.user = user[0];
      });
    }
    this.user = this.messageService.getUser();
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.onRouterChanged(e);
      }
    });
    this.load('module-product');
    this.load('module-order');
  }

  load(name: string): void {

    const configItem = this.config[name];
    if (configItem.loaded) { return; }

    const content = document.getElementById('content');
    const script = document.createElement('script');
    script.src = this.config[name].path;
    content.appendChild(script);

    const element: HTMLElement = document.createElement(configItem.element);
    element.setAttribute('state', 'init');
    element.setAttribute('route', 'init');
    element.setAttribute('data', 'init');
    content.appendChild(element);
    element.addEventListener('routerChanges', msg => this.handleMessage(msg));
    if (name === 'module-product') {
      element.addEventListener('buy', event => this.onBuyItem(event));
    }

    script.onerror = () => console.error(`error loading ${configItem.path}`);


    this.stateService.registerClient(element);
  }

  handleMessage(msg): void {
    console.log('#######msg', msg);
    this.stateService.setState('route', JSON.stringify(msg.detail));

  }

  onRouterChanged(event) {
    console.log('router changed in shell main, event: ', event);
    this.stateService.setState('route', JSON.stringify(event));
    if (event.url === 'dashboard') {
      this.router.navigate(['dashboard']);
    }
  }

  onBuyItem(event) {

    const item = event.detail;
    const data = {
      user: this.user,
      item
    };
    this.router.navigate(['order']).then( () => {
      console.log('this user in main on buy', this.user);
      this.stateService.setState('data', JSON.stringify(data), ['module-order']);
    });
  }




  signOut() {
    delete localStorage.userID;
    this.router.navigate(['login']);
  }

  isLogged() {
    console.log('localStorage', !(localStorage.userID === undefined));
    return !(localStorage.userID === undefined);
  }
}
