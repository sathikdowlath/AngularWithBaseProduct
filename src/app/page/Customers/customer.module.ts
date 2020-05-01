import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerEditComponent } from 'src/app/page/Customers/customer-edit/customer-edit.component';
import { CustomerListComponent } from 'src/app/page/Customers/customer-list/customer-list.component';
import { CustomerDetailComponent } from 'src/app/page/Customers/customer-detail/customer-detail.component';
import {CustomerRoutingModule} from 'src/app/page/Customers/customer-routing.module';


@NgModule({
  declarations: [
    CustomerEditComponent,
    CustomerListComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
