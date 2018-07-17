import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [ AppComponent ]
  // ,
  // providers: [
  //   ProductService,
  //   { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }],
  // bootstrap: [AppComponent]
})
export class AppModule { }
