import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig} from "primeng/api";
import { CategoriesService } from "../../services/categories.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private primengConfig: PrimeNGConfig,
    private navigationService: CategoriesService
  ) {}


  // NAVIGATION BAR

  categories: MenuItem[];

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.fetchNav();
  }

  fetchNav(){
    this.navigationService.getNavCategory()
      .subscribe( data => {
        let newDate: MenuItem[] = [];
        this.dataUpdate(data, newDate);
        this.categories = newDate;
      })
  }

  dataUpdate(data, newData) {

    for (let i = 0; i < data.length; i++) {
      let item: any = {
        label: data[i].name,
        id: data[i].id.toString(),
      };

      if (data[i].children && data[i].children.length) {
        item.items = [];
        let newData = data[i].children;
        this.dataUpdate(newData, item.items);
      }

      if(!item.items) {
        item.routerLink = [`catalog/${data[i].id}`]
      }

      newData.push(item);
    }

  }

}
