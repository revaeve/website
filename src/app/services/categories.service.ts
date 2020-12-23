import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {CategoriesStore} from "./categories.store";
import {CategoriesModel} from "../models/categories.model";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient,
    private categoriesStore: CategoriesStore
    ) {
  }

  getNavCategory(): Observable<CategoriesModel[]> {
     return this.http.get('/api/category')
       .pipe(
         tap((data: CategoriesModel[]) => {
           this.categoriesStore.set(data);
         })
       );
  }

  getCategoryName(categoryId): Observable<string> {
    return this.categoriesStore.get$()
      .pipe(
        map((data) => {
          if (data) {
            return this.matchCategoryId(data, +categoryId);
          }
          return null;
        })
      )
  }

  //TODO сделать остальные запросы:
  // getCategoryChildren(id) {}

  matchCategoryId(data, matchingId):string {
    let result;
    for (let i=0; i < data.length; i++) {
      if(data[i].id === matchingId) {
        result = data[i].name;
      }
      if (data[i].children.length > 0) {
        result = this.matchCategoryId(data[i].children, matchingId);
      }
      if (result) {
        break;
      }
    }
    return result;
  }
}
