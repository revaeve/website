import { Component, OnInit } from '@angular/core';
import { BannerValue } from "../../models/banner-value.model";

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // TODO: выдает ошибку не может найти previewImageSrc
  images: BannerValue[] = [
    {
      "previewImageSrc": "https://hotline.ua/img/uploads/clients/950x277=5f4e0c06ad5ae.jpg",
      "alt": "Description for Image 14",
      "title": "Title 14"
    },
    {
      "previewImageSrc": "https://hotline.ua/img/uploads/clients/950-277=5f685d704f524.jpg",
      "alt": "Description for Image 14",
      "title": "Title 14"
    },
    {
      "previewImageSrc": "https://hotline.ua/img/uploads/clients/hl-board-GREE-1000x277-rus=5f4e006899a9c.jpg",
      "alt": "Description for Image 14",
      "title": "Title 14"
    },
    {
      "previewImageSrc": "https://hotline.ua/img/uploads/clients/5e26cbf2b8490.jpg",
      "alt": "Description for Image 14",
      "title": "Title 14"
    }
  ];

  responsiveOptions:any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

}
