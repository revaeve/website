import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFiltersPhotoComponent } from './product-filters-photo.component';

describe('ProductFiltersPhotoComponent', () => {
  let component: ProductFiltersPhotoComponent;
  let fixture: ComponentFixture<ProductFiltersPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFiltersPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFiltersPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
