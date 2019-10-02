import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StateService {

    constructor() { }

    private clients: HTMLElement[] = [];

    public registerClient(client: HTMLElement) {
        this.clients.push(client);
    }

    public setState(state: string) {
        for (const client of this.clients) {
            client.setAttribute('state', state);
        }
    }

    public setRoute(route: string) {
      for (const client of this.clients) {
        client.setAttribute('route', route);
      }
    }

    public setData(data: string) {
      for (const client of this.clients) {
        client.setAttribute('data', data);
      }
    }
}
