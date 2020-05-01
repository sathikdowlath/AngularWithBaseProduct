import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { OrderDetailComponent } from 'src/app/page/Orders/order-detail/order-detail.component';
import { OrderEditComponent } from 'src/app/page/Orders/order-edit/order-edit.component';
import { OrderListComponent } from 'src/app/page/Orders/order-list/order-list.component';

const routes : Routes = [{
  path: '' , component:OrderListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderRoutingModule { }
