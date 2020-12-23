import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTabReviewsComponent } from './product-tab-reviews.component';

describe('ProductTabReviewsComponent', () => {
  let component: ProductTabReviewsComponent;
  let fixture: ComponentFixture<ProductTabReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTabReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTabReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
