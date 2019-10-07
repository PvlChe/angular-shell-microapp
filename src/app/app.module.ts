import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PushPipe} from './push.pipe';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { EmptyComponent } from './empty/empty.component';
import {HttpClientModule} from '@angular/common/http';
import { UserWidgetComponent } from './user-widget/user-widget.component';
import {MessageService} from './message.service';
import {UserService} from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    PushPipe,
    LoginComponent,
    EmptyComponent,
    UserWidgetComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'dashboard', component: UserWidgetComponent},
      {path: '**', component: EmptyComponent},

    ], { useHash: true }),

    // Material Design
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule

  ],
  providers: [MessageService, UserService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
