import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-product-tab-specifications',
  templateUrl: './product-tab-specifications.component.html',
  styleUrls: ['./product-tab-specifications.component.scss']
})
export class ProductTabSpecificationsComponent implements OnInit {

  @Input() productData: ProductModel;

  constructor() { }

  ngOnInit(): void {
  }

}
