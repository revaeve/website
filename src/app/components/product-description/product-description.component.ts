import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  @Input() productData: ProductModel;
  @Output() onShowMore: EventEmitter<string> = new EventEmitter<string>()

  showMore: string;

  constructor() { }

  ngOnInit(): void {
    console.log('>> from app-product-description', this.productData);
  }

  showMoreAboutProduct() {
    this.showMore = 'about';
    this.onShowMore.emit(this.showMore)
  }

  showMoreSpecifications() {}

}
