import { NgModule } from '@angular/core';
import { RouterModule, } from '@angular/router';
import {OrderComponent} from './order/order.component';
import {EmptyComponent} from './empty/empty.component';
import {OrderWidgetComponent} from './order-widget/order-widget.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'order', component: OrderComponent
      },
      {
        path: 'dashboard', component: OrderWidgetComponent
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
