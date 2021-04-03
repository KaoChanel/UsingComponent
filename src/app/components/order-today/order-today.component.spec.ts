import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTodayComponent } from './order-today.component';

describe('OrderTodayComponent', () => {
  let component: OrderTodayComponent;
  let fixture: ComponentFixture<OrderTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
