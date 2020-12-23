import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFiltersListBoxComponent } from './product-filters-list-box.component';

describe('ProductFiltersWebsitesComponent', () => {
  let component: ProductFiltersListBoxComponent;
  let fixture: ComponentFixture<ProductFiltersListBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFiltersListBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFiltersListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
