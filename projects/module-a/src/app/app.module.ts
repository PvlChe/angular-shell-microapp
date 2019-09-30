import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {createCustomElement} from '@angular/elements';
import {AppRoutingModule} from './app-routing.module';
import {ItemListComponent} from './item-list/item-list.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';
import { ItemComponent } from './item/item.component';
import { EmptyComponent } from './empty/empty.component';
import { ItemDetailsComponent } from './item/item-details/item-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {HttpClientModule} from '@angular/common/http';

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
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    if (!customElements.get('module-a')) {
      const appElement = createCustomElement(AppComponent, {injector: this.injector});
      customElements.define('module-a', appElement);
      console.log('defined module-a');
    }
  }
}
