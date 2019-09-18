import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemListComponent} from './item-list/item-list.component';
import {EmptyComponent} from './empty/empty.component';

const routes: Routes = [

];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'module-a', component: ItemListComponent
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
