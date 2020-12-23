import {Component, Input, OnInit} from '@angular/core';
import {CarouselValueModel} from "../../models/carousel-value.model";

@Component({
  // TODO: DONE Rename 'app-carousel' to 'app-products-carousel', and please change component name, file name, folder name as well
  selector: 'app-carousel-products',
  templateUrl: './carousel-products.component.html',
  styleUrls: ['./carousel-products.component.scss']
})
export class CarouselProductsComponent implements OnInit {

  // TODO: DONE Please rename it with respect camelCase, https://techrocks.ru/2018/08/09/most-common-programming-case-types/
  @Input() headingText;

  // TODO: DONE Please get rid of Carousel1Model model, and use either Product model or rename Carousel1Model to more readable name
  @Input() carouselProducts: CarouselValueModel[];

  responsiveOptions;

  // TODO: DONE Get rid of productService here and move all getting data up, to the main-page, so that this component will just receive product from an @Input.
  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
  }

}
