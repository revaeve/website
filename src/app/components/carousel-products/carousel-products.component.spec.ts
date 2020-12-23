import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselProductsComponent } from './carousel-products.component';

describe('CarouselComponent', () => {
  let component: CarouselProductsComponent;
  let fixture: ComponentFixture<CarouselProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
