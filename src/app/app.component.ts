import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shell-app';

  config = {
    'module-a': {
      loaded: false,
      paths: ['http://127.0.0.1:64606/main.js', 'http://127.0.0.1:64606/polyfills.js', 'http://127.0.0.1:64606/runtime.js'],
      element: 'module-a'
    }
  };

  ngOnInit() {
    this.load('module-a');
  }

  load(name: string): void {

    const configItem = this.config[name];
    if (configItem.loaded) { return; }

    const content = document.getElementById('content');

    this.config['module-a'].paths.forEach( path => {
      const script = document.createElement('script');
      script.src = path;
      content.appendChild(script);
    });

    const element: HTMLElement = document.createElement(configItem.element);
    content.appendChild(element);

  }

}
