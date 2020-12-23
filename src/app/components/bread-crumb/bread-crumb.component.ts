import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  home: MenuItem;

  // TODO: Future: Generally component looks good as a dummy, but it would be good make it live.
  ngOnInit() {
    this.items = [
      {label: 'Computer'},
      {label: 'Notebook'},
      {label: 'Accessories'},
      {label: 'Backpacks'},
      {label: 'Item'}
    ];

    this.home = {icon: 'pi pi-home'};
  }

}
