import { Component, OnInit, Input } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Filters} from "../../models/product-filters.model";
import {ResultListModel} from "../../models/result-list.model";
import {ReviewsModel} from "../../models/reviews.model";


@Component({
  selector: 'app-product-tab-reviews',
  templateUrl: './product-tab-reviews.component.html',
  styleUrls: ['./product-tab-reviews.component.scss']
})
export class ProductTabReviewsComponent implements OnInit {

  @Input() reviews: ReviewsModel[];
  @Input() reviewsTotal: number;


  constructor(
  ) {}

  ngOnInit() {
  }

  filterData = {
    rate: {
      heading: 'Отзывы с оценкой:',
      data: [
        {stars: 5, value: '5 stars', info: '54300 отзывов'},
        {stars: 4, value: '4 stars', info: '2300 отзывов'},
        {stars: 3, value: '3 stars', info: '5300 отзывов'},
        {stars: 2, value: '2 stars', info: '300 отзывов'},
        {stars: 1, value: '1 stars', info: '40 отзывов'}
      ],
    },

    listBox: {
      heading: 'Отзывы с оценкой:',
      data: [
        {name: 'Prom'},
        {name: 'Amazon'},
        {name: 'Rozetka'},
        {name: 'HotLine'},
        {name: 'France'},
        {name: 'Germany'},
        {name: 'India'},
        {name: 'Japan'},
        {name: 'Spain'},
        {name: 'United States'}
      ]
    }
  }

  showSelectedFilters: boolean =  false;

  selectedFilters: Filters = {
    photo: false,
    stars: [],
    webSites: [],
  }

  selectedFilters$: BehaviorSubject <Filters> = new BehaviorSubject(null);

  updateSelectedFiltersPhoto(newValue){
    this.selectedFilters.photo = newValue;

    this.pushNewValueInPipe();

    this.showSelectedFiltersFunc();

  }

  updateSelectedFiltersStars(newValue){
    this.selectedFilters.stars = newValue;

    this.pushNewValueInPipe();

    this.showSelectedFiltersFunc();

  }

  updateSelectedFiltersWebSites(newValue) {
    this.selectedFilters.webSites = newValue;

    this.pushNewValueInPipe();

    this.showSelectedFiltersFunc();

  }

  showSelectedFiltersFunc(){
    this.showSelectedFilters = this.selectedFilters.photo || this.selectedFilters.stars.length > 0 || this.selectedFilters.webSites.length > 0;
  }

  pushNewValueInPipe(){
    this.selectedFilters$.next(this.selectedFilters);
  }

}
