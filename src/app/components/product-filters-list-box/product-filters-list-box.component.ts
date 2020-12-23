import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FiltersDataModel} from "../../models/filters.model";
import {WebSitesModel} from "../../models/web-sites.model";

// TODO: DONE Please split this to the separate file

class ListBoxFilterData {
}

@Component({
  selector: 'product-filters-list-box',
  templateUrl: './product-filters-list-box.component.html',
  styleUrls: ['./product-filters-list-box.component.scss']
})
export class ProductFiltersListBoxComponent implements OnInit {

  @Output() outputSelectedWebSites: EventEmitter <WebSitesModel[]> = new EventEmitter<WebSitesModel[]>();
  @Input() inputListBoxData: FiltersDataModel<ListBoxFilterData>;

  selectedWebSites: any[];

  constructor() {
  }

  ngOnInit(): void {
  }

  onChangeFunc(){
    this.outputSelectedWebSites.emit(this.selectedWebSites)
  }

}
