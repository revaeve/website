import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CarouselArticleModel } from '../models/carousel-article.model';

@Injectable()
export class CarouselArticlesService {

  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get<any>('assets/carousel-articles.json')
      .toPromise()
      .then(res => <CarouselArticleModel[]>res.data)
      .then(data => { return data; });
  }

}
