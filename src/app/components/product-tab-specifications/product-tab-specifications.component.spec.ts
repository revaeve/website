import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTabSpecificationsComponent } from './product-tab-specifications.component';

describe('ProductTabSpecificationsComponent', () => {
  let component: ProductTabSpecificationsComponent;
  let fixture: ComponentFixture<ProductTabSpecificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTabSpecificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTabSpecificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
