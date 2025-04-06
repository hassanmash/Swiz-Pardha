import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product!: Product;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  viewDetails() {
    this.router.navigate(['/product', this.product.id]);
  }
}
