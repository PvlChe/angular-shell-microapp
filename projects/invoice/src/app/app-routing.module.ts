import { NgModule } from '@angular/core';
import { RouterModule, } from '@angular/router';
import {InvoiceComponent} from './invoice/invoice.component';
import {EmptyComponent} from './empty/empty.component';
import {ItemComponent} from '../../../module-a/src/app/item/item.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'invoice',
        loadChildren: 'order/'
      },
      {
        path: '**', component: EmptyComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
