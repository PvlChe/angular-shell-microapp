import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {createCustomElement} from '@angular/elements';
import {AppRoutingModule} from './app-routing.module';
import {ItemListComponent} from './item-list/item-list.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import { ItemComponent } from './item/item.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    EmptyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // MAterial Design
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, { injector: this.injector});
    customElements.define('module-a', appElement);
  }
}
