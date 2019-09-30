import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemListComponent} from './item-list/item-list.component';
import {EmptyComponent} from './empty/empty.component';
import {ItemDetailsComponent} from './item/item-details/item-details.component';

const routes: Routes = [

];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'module-a', component: ItemListComponent
      },
      {
        path: 'module-a/item/:id',
        component: ItemDetailsComponent
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
