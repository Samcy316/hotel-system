import { TestBed } from '@angular/core/testing';

import { AddhotelService } from './addhotel.service';

describe('AddhotelService', () => {
  let service: AddhotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddhotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
