import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from 'src/app/page/product/product-detail/product-detail.component';
import { ProductEditComponent } from 'src/app/page/product/product-edit/product-edit.component';
import { ProductListComponent } from 'src/app/page/product/product-list/product-list.component';
import {ProductRoutingModule} from 'src/app/page/product/product-routing.module';
import {SharedModule} from '../../Module/shared.module';
import {MaterialModule} from '../../Module/material.module';
import {ProductData} from '../product/product-data';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {environment as env } from '../../../environments/environment';
import { HttpClientModule } from '@angular/common/http'

 @NgModule({
  declarations: [
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent         
  ],
  imports: [
    HttpClientModule,
    //!env.production ? InMemoryWebApiModule.forRoot(ProductData,{delay: 1000,dataEncapsulation: false }):[],
    !env.production ? InMemoryWebApiModule.forRoot(ProductData,{delay: 0,dataEncapsulation: false }):[],
    CommonModule,    
    ProductRoutingModule,
    RouterModule.forChild( [  
      { path: '', component: ProductListComponent},
      { path: 'products/:id', component: ProductDetailComponent },
      //{ path: 'products/:id/edit',component: ProductEditComponent}
      { path: 'products/:id/edit',component: ProductEditComponent}
    ]),
    SharedModule,
    MaterialModule
  ],
  exports:[RouterModule,
    ProductData]
})
export class ProductModule { }
