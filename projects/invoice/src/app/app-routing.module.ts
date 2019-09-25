import { NgModule } from '@angular/core';
import { RouterModule, } from '@angular/router';
import {InvoiceComponent} from './invoice/invoice.component';
import {EmptyComponent} from './empty/empty.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'invoice', component: InvoiceComponent
      },
      {
        path: '**', component: EmptyComponent
      }
    ], {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
