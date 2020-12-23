import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FiltersDataModel, RateFilterData} from "../../models/filters.model";

@Component({
  selector: 'app-product-filters-rate',
  templateUrl: './product-filters-rate.component.html',
  styleUrls: ['./product-filters-rate.component.scss']
})
export class ProductFiltersRateComponent implements OnInit {

  @Output() outputSelectedStars: EventEmitter <string[]> = new EventEmitter<string[]>();

  @Input() inputRateData: FiltersDataModel<RateFilterData>;

  selectedStars: string[];

  constructor() { }

  ngOnInit() {

  }

  onChangeFunc(){
    this.outputSelectedStars.emit(this.selectedStars)
  }

}
