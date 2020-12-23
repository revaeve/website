import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CategoriesModel} from "../models/categories.model";

@Injectable({
  providedIn: 'root'
})
export class CategoriesStore {

  categories$: BehaviorSubject<CategoriesModel[]> = new BehaviorSubject(null);

  constructor() {
  }

  get$() {
    return this.categories$;
  }

  get() {
    return this.categories$.getValue();
  }

  set(value) {
    this.categories$.next(value);
  }

  clear() {
    this.categories$.next(null);
  }

}
