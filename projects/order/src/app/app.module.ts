import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {createCustomElement} from '@angular/elements';
import {AppRoutingModule} from './app-routing.module';
import { OrderComponent } from './order/order.component';
import {EmptyComponent} from './empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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

    if (!customElements.get('module-order')) {
      const appElement = createCustomElement(AppComponent, { injector: this.injector});
      customElements.define('module-order', appElement);

    }
  }
}
