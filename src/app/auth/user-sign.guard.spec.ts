import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userSignGuard } from './user-sign.guard';

describe('userSignGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userSignGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
