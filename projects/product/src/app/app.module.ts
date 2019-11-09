import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import { AppComponent } from './components/app.component';
import {createCustomElement} from '@angular/elements';
import {AppRoutingModule} from './app-routing.module';
import {ItemListComponent} from './components/item-list/item-list.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';
import { ItemComponent } from './components/item/item.component';
import { EmptyComponent } from './components/empty/empty.component';
import { ItemDetailsComponent } from './components/item/item-details/item-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {HttpClientModule} from '@angular/common/http';
import {MessageService} from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    EmptyComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    // MAterial Design
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatInputModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    if (!customElements.get('module-product')) {
      const appElement = createCustomElement(AppComponent, {injector: this.injector});
      customElements.define('module-product', appElement);
      console.log('defined product');
    }
  }
}
