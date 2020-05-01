import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from 'src/app/page/welcome/welcome.component';
import {ProductEditComponent}  from 'src/app/page/product/product-edit/product-edit.component';

const routes: Routes = [
  {path:'welcome',component:WelcomeComponent},
  {path: '',redirectTo:'welcome',pathMatch:'full'},
  {path:'products',loadChildren: ()=> import('./page/product/product.module').then(p=>p.ProductModule)},
  {path:'customers',loadChildren:()=>import('./page/Customers/customer.module').then(c=>c.CustomerModule)},
  {path:'orders',loadChildren:()=>import('./page/Orders/order.module').then(o=>o.OrderModule)},
  {path:'invoice',loadChildren:()=>import('./page/Invoice/invoice.module').then(i=>i.InvoiceModule)},
  //{ path: 'products/:id/edit',component: ProductEditComponent},
  {path: '**',redirectTo:'welcome',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }