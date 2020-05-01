import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from 'src/app/page/Orders/order-list/order-list.component';
import { OrderDetailComponent } from 'src/app/page/Orders/order-detail/order-detail.component';
import { OrderEditComponent } from 'src/app/page/Orders/order-edit/order-edit.component';
import {OrderRoutingModule} from 'src/app/page/Orders/order-routing.module';
@NgModule({
  declarations: [
    OrderListComponent,
    OrderDetailComponent,
    OrderEditComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
