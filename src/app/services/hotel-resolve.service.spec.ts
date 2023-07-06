import { TestBed } from '@angular/core/testing';

import { HotelResolveService } from './hotel-resolve.service';

describe('HotelResolveService', () => {
  let service: HotelResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
