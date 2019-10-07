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
    'module-a': {
      loaded: false,
      path: ['http://127.0.0.1:61268/main.js'],
      element: 'module-a'
    },
    'module-order': {
      loaded: false,
      path: ['http://127.0.0.1:60000/main.js'],
      element: 'module-order'
    },
    'module-invoice': {
      loaded: false,
      path: ['http://127.0.0.1:60001/main.js'],
      element: 'module-invoice'
    }
  };

  ngOnInit() {
    if (localStorage.userID) {
      this.userService.getUserByID(localStorage.userID).subscribe( user => {
        this.user = user;
      });
    }
    this.user = this.messageService.getUser();
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.onRouterChanged(e);
      }
    });
    this.load('module-a');
    this.load('module-order');
    this.load('module-invoice');
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
    if (name === 'module-a') {
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
  }

  onBuyItem(event) {
    console.log('this.messageService.getUser()', this.messageService.getUser());
    console.log('on buy shell event: ', event);
    const item = event.detail;
    const data = {
      user: this.user,
      item
    };
    this.router.navigate(['order']).then( () => {
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
