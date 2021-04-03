import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOrderHeaderComponent } from './sale-order-header.component';

describe('SaleOrderHeaderComponent', () => {
  let component: SaleOrderHeaderComponent;
  let fixture: ComponentFixture<SaleOrderHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleOrderHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleOrderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
