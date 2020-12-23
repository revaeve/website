import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Filters} from "../../models/product-filters.model";
import {BehaviorSubject, Subject} from "rxjs";

@Component({
  selector: 'app-product-filters-selected',
  templateUrl: './product-filters-selected.component.html',
  styleUrls: ['./product-filters-selected.component.scss']
})
export class ProductFiltersSelectedComponent implements OnInit, OnChanges {

  @Input() inputSelectedFiltersAsync: BehaviorSubject<Filters>;

  selectedFilters: string[] = [];

  newValue;

  constructor() {

  }

  ngOnInit(): void {
    this.newValue = this.inputSelectedFiltersAsync.getValue()

    this.showSelectedFilters(this.inputSelectedFiltersAsync.getValue());

    this.inputSelectedFiltersAsync
      .subscribe((newValue) => {
        this.showSelectedFilters(newValue);
      });
  }

  ngOnChanges(){
  }

  showSelectedFilters(newSelectedFilters){
    this.selectedFilters = [];
    if(newSelectedFilters?.photo){
      this.selectedFilters.push("Отзывы с фотографией")
    }
    if(newSelectedFilters.stars.length > 0){
      newSelectedFilters.stars.forEach( stars => {
        this.selectedFilters.push(stars)
      })
    }
    if(newSelectedFilters.webSites.length > 0){
      newSelectedFilters.webSites.forEach( webSite => {
        this.selectedFilters.push(webSite.name)
      })
    }
  }

}
