import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shell-app';
  showFiller = false;

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
    content.appendChild(element);
  }

}
