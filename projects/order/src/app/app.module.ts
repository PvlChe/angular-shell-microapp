import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import { AppComponent } from './components/app.component';
import {createCustomElement} from '@angular/elements';
import {AppRoutingModule} from './app-routing.module';
import { OrderComponent } from './components/order/order.component';
import {EmptyComponent} from './components/empty/empty.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OrderWidgetComponent } from './components/order-widget/order-widget.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MessageService} from './services/message.service';
import {OrderService} from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    EmptyComponent,
    OrderWidgetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatCheckboxModule,
    RouterModule,
    MatCardModule
  ],
  providers: [MessageService, OrderService],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    if (!customElements.get('module-order')) {
      const appElement = createCustomElement(AppComponent, {injector: this.injector});
      customElements.define('module-order', appElement);
      console.log('defined order');
    }
  }
}
