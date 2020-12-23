import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {main} from "@angular/compiler-cli/src/main";
import {ApiCatalogPageModel} from "../models/api-catalog-page.model";


@Injectable()
export class CatalogPageService {

  constructor(private http: HttpClient) { }

  getProducts(apiValue: ApiCatalogPageModel) {

    let mainParams = this.setMainParams(apiValue);

    if (apiValue.brandIds) {
      mainParams = mainParams.set('brandIds', apiValue.brandIds.join(','));
      console.log("api brandIds",apiValue.brandIds)
    }

    if (apiValue.stars) {
      mainParams = mainParams.set('stars', apiValue.stars.join(','));
      console.log("api stars",apiValue.stars)
    }

    return this.http.get<any>(`api/product`, { params: mainParams });
  }

  setMainParams(apiValue) {
    return new HttpParams()
      .set('categoryId', apiValue.categoryId.toString())
      .set('sortByStars', apiValue.sort.toString())
      .set('take', apiValue.take.toString())
      .set('skip', apiValue.skip.toString());
  }

}
