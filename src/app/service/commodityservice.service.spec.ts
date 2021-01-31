import { TestBed } from '@angular/core/testing';

import { CommodityService } from './commodity.service';

describe('CommodityserviceService', () => {
  let service: CommodityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommodityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
