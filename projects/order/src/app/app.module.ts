import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {createCustomElement} from '@angular/elements';
import {AppRoutingModule} from './app-routing.module';
import { OrderComponent } from './order/order.component';
import {EmptyComponent} from './empty/empty.component';
import {MatButtonModule, MatCheckboxModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatRadioModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatCheckboxModule
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
      customElements.define('module-order', appElement);
  }
}
