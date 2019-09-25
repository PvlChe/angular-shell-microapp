import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import {MatButtonModule} from '@angular/material';
import {EmptyComponent} from './empty/empty.component';
import {AppRoutingModule} from './app-routing.module';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
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

      const appElement = createCustomElement(AppComponent, { injector: this.injector});
      customElements.define('module-invoice', appElement);
  }
}
