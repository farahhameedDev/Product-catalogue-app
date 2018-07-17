import { Injectable } from '@angular/core';
import { Product } from './product';
import { Products } from './mock-products';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  getProducts(): Product[] {
    return Products;
  }
}
