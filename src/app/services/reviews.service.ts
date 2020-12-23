import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResultListModel} from "../models/result-list.model";
import {ReviewsModel} from "../models/reviews.model";

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  getProductReviews(productId, take, skip ) {
    return this.http.get(`/api/review?productId=${productId}&take=${take}&skip=${skip}`);
  }
}
