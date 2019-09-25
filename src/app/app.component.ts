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
      paths: ['module-a/main.js', 'module-a//polyfills.js', 'module-a/runtime.js'],
      element: 'module-a'
    },
    'module-order': {
      loaded: false,
      paths: ['order/main.js', 'order/polyfills.js', 'order/runtime.js'],
      element: 'module-order'
    }
  };

  ngOnInit() {
    this.load('module-a');
    this.load('module-order');
  }

  load(name: string): void {

    const configItem = this.config[name];
    if (configItem.loaded) { return; }

    const content = document.getElementById('content');

    this.config[name].paths.forEach( path => {
      const script = document.createElement('script');
      script.src = path;
      content.appendChild(script);

    });

    const element: HTMLElement = document.createElement(configItem.element);
    content.appendChild(element);
    console.log('uppended ' + name);
  }

}
