import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselArticlesComponent } from './carousel-articles.component';

describe('Carousel2Component', () => {
  let component: CarouselArticlesComponent;
  let fixture: ComponentFixture<CarouselArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
