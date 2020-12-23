import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFiltersRateComponent } from './product-filters-rate.component';

describe('ProductFiltersRateComponent', () => {
  let component: ProductFiltersRateComponent;
  let fixture: ComponentFixture<ProductFiltersRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFiltersRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFiltersRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
