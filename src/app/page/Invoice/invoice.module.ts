import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {InvoiceDetailComponent} from '../Invoice/invoice-detail/invoice-detail.component';
import {SharedModule} from '../../Module/shared.module';

const routes : Routes =[{
  path:'',component: InvoiceDetailComponent
}];

@NgModule({
  declarations: [InvoiceDetailComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InvoiceModule { }
