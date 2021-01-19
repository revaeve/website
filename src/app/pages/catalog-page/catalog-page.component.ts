import {Component, OnInit} from '@angular/core';
import {CatalogPageService} from '../../services/catalog-page.service';
import {SelectItem} from 'primeng/api';
import {PrimeNGConfig} from 'primeng/api';
import {Filters} from "../../models/product-filters.model";
import {BehaviorSubject, Observable} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {CategoriesService} from "../../services/categories.service";
import {ProductModel} from "../../models/product.model";
import {BrandsService} from "../../services/brands.service";
import {ApiCatalogPageModel} from "../../models/api-catalog-page.model";

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {

  visibleSidebar1;
  categoryHeading$: Observable<string>;
  categoryId: number;
  products: ProductModel[];
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  totalRecords: number;
  showLoader: boolean = false;
  apiValue: ApiCatalogPageModel = {} as ApiCatalogPageModel;


  // ФИЛЬТРЫ

  filterData = {
    rate: {
      heading: 'Товары с оценкой:',
      data: [
        {stars: 5, value: '5 звезд', info: '54300 отзывов'},
        {stars: 4, value: '4 звезды', info: '2300 отзывов'},
        {stars: 3, value: '3 звезды', info: '5300 отзывов'},
        {stars: 2, value: '2 звезды', info: '300 отзывов'},
        {stars: 1, value: '1 звезда', info: '40 отзывов'}
      ],
    },

    listBox: {
      heading: 'Бренды:',
      data: []
    }
  }


  // ВЫБРАНЫЕ ФИЛЬТРЫ СЛЕВА

  showSelectedFilters: boolean = false;

  selectedFilters: Filters = {
    stars: [],
    webSites: [],
  }

  selectedFilters$: BehaviorSubject<Filters> = new BehaviorSubject(null);


  constructor(
    private route: ActivatedRoute,
    private catalogPageService: CatalogPageService,
    private navigationService: CategoriesService,
    private primengConfig: PrimeNGConfig,
    private brandsService: BrandsService,
  ) {
  }

  ngOnInit() {

    window.scrollTo(0, 0)

    // Роутинг
    this.route.params.subscribe((params: Params) => {
      this.apiValue.categoryId = +params.categoryId;
      this.apiValue.skip = 0;
      this.apiValue.sort = "desc";
      this.categoryHeading$ = this.navigationService.getCategoryName(params.categoryId);
    })

    this.brandsService.getProductBrands()
      .subscribe((data: any) => {
        this.filterData.listBox.data = data;
      })

    this.sortOptions = [
      {label: 'Оценка товара по возрастанию', value: '!stars'},
      {label: 'Оценка товара по убыванию', value: 'stars'}
    ];

    this.primengConfig.ripple = true;

  }

  onSortChange(event) {
    console.log(event.value)
    console.log(event.value.indexOf('!'))
    if (event.value.indexOf('!') === 0) {
      this.apiValue.sort = "asc"
    } else {
      this.apiValue.sort = "desc"
    }

    this.loadData();
  }


  loadData(event?) {
    if(event) {
      this.apiValue.take = event.rows;
      this.apiValue.skip = event.first;
    }

    if (this.products) {
      this.showLoader = true;
    }

    console.log(this.apiValue)

    this.catalogPageService.getProducts(this.apiValue)
      .subscribe(data => {
        this.products = data.result;
        this.totalRecords = data.total;
        this.showLoader = false;
      });
  }





  // ФУНКЦИИ
  // ВЫБРАНЫЕ ФИЛЬТРЫ СЛЕВА

  updateSelectedFiltersStars(newValue) {

    this.apiValue.stars = newValue.map(value => value.slice(0,1));
    this.loadData();

    this.selectedFilters.stars = newValue;
    this.showSelectedFiltersFunc();
  }

  updateSelectedFiltersWebSites(newValue) {

    this.apiValue.brandIds = newValue.map(value => value.id);
    this.loadData();

    this.selectedFilters.webSites = newValue;
    this.showSelectedFiltersFunc();
  }

  showSelectedFiltersFunc() {
    this.selectedFilters$.next(this.selectedFilters);
    this.showSelectedFilters = this.selectedFilters.stars.length > 0 || this.selectedFilters.webSites.length > 0;
  }

}
