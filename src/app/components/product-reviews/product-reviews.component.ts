import {Component, Input, OnInit} from '@angular/core';
import {ReviewsModel} from "../../models/reviews.model";

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss']
})
export class ProductReviewsComponent implements OnInit {

  @Input() reviewDate: ReviewsModel;
  reviewPlace: string;

  constructor() {
    this.reviewPlace = "hotline.ua"
  }

  ngOnInit(): void {
  }


}
