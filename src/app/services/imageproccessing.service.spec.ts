import { TestBed } from '@angular/core/testing';

import { ImageproccessingService } from './imageproccessing.service';

describe('ImageproccessingService', () => {
  let service: ImageproccessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageproccessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
