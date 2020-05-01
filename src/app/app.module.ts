import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './page/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './Module/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductModule } from 'src/app/page/product/product.module';
import { HttpErrorInterceptor,HttpGetInterceptor } from 'src/app/Module/http-error.interceptor';
import { GlobalErrorHandler } from "src/app/Module/global-error-handler";
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ProductModule
  ],
  providers: [
    {provide:ErrorHandler,useClass:GlobalErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpGetInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
