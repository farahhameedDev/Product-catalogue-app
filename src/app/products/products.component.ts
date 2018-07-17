import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selectedProduct: Product;
  product: Product;
  products = Product[20];
  productService : ProductService;

  constructor(productService : ProductService) 
  { 
    this.productService = productService;
  }
  
  getProducts(): void {
    this.products = this.productService.getProducts();
  }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product) : void
  {
    this.selectedProduct = product;
  }

}
