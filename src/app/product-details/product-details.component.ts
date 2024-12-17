import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() product!: IProduct; //input decorator to pass data from parent to child component
  @Output() buy = new EventEmitter(); //output decorator to pass data from child to parent component
  
  buyButtonClicked(product: IProduct) {
    //this.cart.push(product);
    this.buy.emit();
    console.log('Product added to cart:', product);
  }

  getImageUrl(product: IProduct) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

}
