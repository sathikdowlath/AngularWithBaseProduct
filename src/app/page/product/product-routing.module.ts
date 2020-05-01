import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from 'src/app/page/product/product-list/product-list.component';
import {ProductDetailComponent}  from 'src/app/page/product/product-detail/product-detail.component';
import {ProductEditComponent}  from 'src/app/page/product/product-edit/product-edit.component';
import {ProductEditGuard} from './product-edit.guard';
const routes: Routes = [  
  { path: '', component: ProductListComponent},
  { path: 'products/:id', component: ProductDetailComponent },
  //{ path: 'products/:id/edit',component: ProductEditComponent}
  { path: 'products/:id/edit',canDeactivate: [ProductEditGuard],component: ProductEditComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)    
  ],
  exports:[]
})
export class ProductRoutingModule { }
