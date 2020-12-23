import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFiltersSelectedComponent } from './product-filters-selected.component';

describe('ProductSelectedFiltersComponent', () => {
  let component: ProductFiltersSelectedComponent;
  let fixture: ComponentFixture<ProductFiltersSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFiltersSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFiltersSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
