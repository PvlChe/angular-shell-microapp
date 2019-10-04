import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StateService {

    constructor() { }

    private clients: HTMLElement[] = [];

    public registerClient(client: HTMLElement) {
        this.clients.push(client);
    }

/*    public getClients(clients: string[]): string[] {
      const foundedClients = [];
      clients.forEach( name => {
        foundedClients.push(document.querySelector(name));
      });
      return foundedClients;
    }*/

    public setState(name: string, state: string, clients?: string[]) {

        for (const client of this.clients) {
          if (clients) {
            if (clients.indexOf(client.tagName.toLowerCase()) >= 0) {
              client.setAttribute(name, state);
            }
          } else {
            client.setAttribute(name, state);
          }
        }
    }
/*
    public setRoute(route: string, clients?: string[]) {
      for (const client of this.clients) {
        client.setAttribute('route', route);
      }
    }

    public setData(data: string, clients?: string[]) {
      for (const client of this.clients) {
        client.setAttribute('data', data);
      }
    }*/
}
