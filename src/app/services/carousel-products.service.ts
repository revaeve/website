import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CarouselProductModel } from '../models/carousel-product.model';

@Injectable()
export class CarouselProductsService {

  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>('assets/carousel-products.json')
      .toPromise()
      .then(res => <CarouselProductModel[]>res.data)
      .then(data => { return data; });
  }

}
