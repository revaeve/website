import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-filters-photo',
  templateUrl: './product-filters-photo.component.html',
  styleUrls: ['./product-filters-photo.component.scss']
})
export class ProductFiltersPhotoComponent implements OnInit {

  @Output() outputSelectedPhoto: EventEmitter <boolean> = new EventEmitter<boolean>();

  selectedPhoto: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeFunc() {
    this.outputSelectedPhoto.emit(this.selectedPhoto)
  }

}
