import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {MatButtonModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PushPipe} from './push.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PushPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Material Design
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
