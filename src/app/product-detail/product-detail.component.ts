import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../data/product-data';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  productId: any;
  products: Product[] = PRODUCTS;
  selectedProduct!: Product;

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    // Fetch product details using this.productId
    const product = this.products.find(p => p.id === this.productId);
    if (!product) {
      throw new Error('Product not found');
    }
    this.selectedProduct = product;
  }
}
