import { Component, OnInit } from '@angular/core';
import { CarouselArticlesService } from "../../services/carousel-articles.service";
import { CarouselArticleModel } from "../../models/carousel-article.model";
import { CarouselProductsService } from "../../services/carousel-products.service";
import { CarouselProductModel } from "../../models/carousel-product.model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  title = [
    'Best Sellers:',
    'Popular reviews:',
    'The new reviews:',
    'Top Beauty & Personal Care products:'
  ]

  articles: CarouselArticleModel[] = [];
  products: CarouselProductModel[] = [];

  constructor(
    private articlesService: CarouselArticlesService,
    private productService: CarouselProductsService
  ) { }

  ngOnInit(): void {
    this.articlesService.getArticles()
      .then(articles => {
        this.articles = articles;
      });

    this.productService.getProducts()
      .then(products => {
        this.products = products;
      });
  }

}
