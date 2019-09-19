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
      paths: ['http://127.0.0.1:61268/main.js', 'http://127.0.0.1:61268/polyfills.js', 'http://127.0.0.1:61268/runtime.js'],
      element: 'module-a'
    },
    'module-order': {
      loaded: false,
      paths: ['http://127.0.0.1:60000/main.js', 'http://127.0.0.1:60000/polyfills.js', 'http://127.0.0.1:60000/runtime.js'],
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
  }

}
