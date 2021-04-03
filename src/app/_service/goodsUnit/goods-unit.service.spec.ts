import { TestBed } from '@angular/core/testing';

import { GoodsUnitService } from './goods-unit.service';

describe('GoodsUnitService', () => {
  let service: GoodsUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoodsUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
