import { Component } from '@angular/core';
import { PRODUCTS } from '../data/product-data';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];

  ngOnInit(): void {
    this.products = PRODUCTS;
  }
}
