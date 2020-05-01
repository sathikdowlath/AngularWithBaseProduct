import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerEditComponent } from 'src/app/page/Customers/customer-edit/customer-edit.component';
import { CustomerListComponent } from 'src/app/page/Customers/customer-list/customer-list.component';
import { CustomerDetailComponent } from 'src/app/page/Customers/customer-detail/customer-detail.component';

const routes: Routes = [{
  path: '', component: CustomerListComponent
}]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerRoutingModule { }
