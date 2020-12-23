import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-product-tab-about',
  templateUrl: './product-tab-about.component.html',
  styleUrls: ['./product-tab-about.component.scss']
})
export class ProductTabAboutComponent implements OnInit {

  @Input() productData: ProductModel;

  constructor() { }

  ngOnInit(): void {
  }

}
