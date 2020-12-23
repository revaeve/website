import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-photo',
  templateUrl: './product-photo.component.html',
  styleUrls: ['./product-photo.component.scss']
})
export class ProductPhotoComponent implements OnInit {

  @Input() mainImageUrl: string;
  @Input() imageUrls: string[];

  images: any[];

  constructor() { }

  ngOnInit(): void {
    this.images = [
      {
        "previewImageSrc": `${location.origin}/${this.mainImageUrl}`,
        "thumbnailImageSrc": this.mainImageUrl,
        "alt": "Description for Image 14",
        "title": "Title 14"
      },
      {
        "previewImageSrc": "https://hotline.ua/img/tx/230/2300225675.jpg",
        "thumbnailImageSrc": "https://hotline.ua/img/tx/230/2300225671.jpg?scale.width=100",
        "alt": "Description for Image 14",
        "title": "Title 14"
      },
      {
        "previewImageSrc": "https://hotline.ua/img/tx/230/2300225755.jpg",
        "thumbnailImageSrc": "https://hotline.ua/img/tx/230/2300225751.jpg?scale.width=100",
        "alt": "Description for Image 14",
        "title": "Title 14"
      },
      {
        "previewImageSrc": "https://hotline.ua/img/uploads/clients/5e26cbf2b8490.jpg",
        "thumbnailImageSrc": "https://hotline.ua/img/uploads/clients/5e26cbf2b8490.jpg",
        "alt": "Description for Image 14",
        "title": "Title 14"
      }
    ];
  }



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
