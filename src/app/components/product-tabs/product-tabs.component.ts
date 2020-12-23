import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-product-tabs',
  templateUrl: './product-tabs.component.html',
  styleUrls: ['./product-tabs.component.scss']
})
export class ProductTabsComponent implements OnInit, OnChanges {

  @Output() onSelectTab: EventEmitter<string> = new EventEmitter<string>();

  items: MenuItem[];
  activeItem: MenuItem;

  constructor(){};

  ngOnInit() {
    this.setItems();
    this.activeItem = this.items[0];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.items) {
      this.activeItem = this.items.find(item =>
        item.id === changes.selectedTab.currentValue
      );
    }
  }

  private setItems() {
    this.items = [
      {
        label: 'Отзывы',
        id: 'reviews',
        command: (event) => {
          this.onSelectTab.emit(event.item.id)
        },
        routerLinkActiveOptions: "product/reviews"
      },
      {
        label: 'Описание',
        id: 'about',
        command: (event) => {
          this.onSelectTab.emit(event.item.id)
        },
        routerLinkActiveOptions: "product/about"
      },
      {
        label: 'Характеристики',
        id: 'specifications',
        command: (event) => {
          this.onSelectTab.emit(event.item.id)
        },
      },
      {
        label: 'Цены',
        id: 'price',
        disabled: true
      },
      { label: 'Обзоры',
        id: 'reviews_2',
        disabled: true
      }
    ];

  }

}
