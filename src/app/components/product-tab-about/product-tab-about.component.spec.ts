import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTabAboutComponent } from './product-tab-about.component';

describe('ProductTabAboutComponent', () => {
  let component: ProductTabAboutComponent;
  let fixture: ComponentFixture<ProductTabAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTabAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTabAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
