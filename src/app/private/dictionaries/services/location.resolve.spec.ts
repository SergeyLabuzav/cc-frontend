import { TestBed } from '@angular/core/testing';

import { LocationResolve } from './location.resolve';

describe('LocationResolve', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationResolve = TestBed.get(LocationResolve);
    expect(service).toBeTruthy();
  });
});
