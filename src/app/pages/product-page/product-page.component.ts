import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import {ProductModel} from "../../models/product.model";
import {ActivatedRoute, Params} from "@angular/router";
import {ReviewsService} from "../../services/reviews.service";
import {ReviewsModel} from "../../models/reviews.model";
import {ResultListModel} from "../../models/result-list.model";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  //TODO Добавить лоудер
  productData: ProductModel = null;
  reviewsData: ResultListModel<ReviewsModel>;
  selectedTab: string;
  sumRating: number;

  constructor(
    // TODO: Please rename 'ProductService' => 'ProductPageService' and file name as well
    private productService: ProductService,
    private reviewsService: ReviewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    window.scrollTo(0, 0);

    this.route.params.subscribe((params:Params) => {

      this.productService.getProductData(params.productId)
        .subscribe((data: ProductModel) => {
          this.productData = data;
        });

      this.reviewsService.getProductReviews(params.productId, 100, 0)
        .subscribe((data: ResultListModel<ReviewsModel>) => {
          this.reviewsData = data;
          this.sumRating = this.getAverageStars(data);
        })

    });

    this.selectedTab = "reviews";

  }

  updateSelectedTab(tab) {
    this.selectedTab = tab;
  }

  getAverageStars(data){
    let starsArray = [];

    data.result.forEach( el => {
      starsArray.push(el.stars);
    })

    //TODO: Разобраться какое округление сделать
    return Math.round(starsArray.reduce((a, b) => (a + b)) / starsArray.length);
  }

}
