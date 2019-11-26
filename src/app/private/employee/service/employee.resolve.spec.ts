import { TestBed } from '@angular/core/testing';

import { EmployeeResolve } from './employee.resolve';

describe('EmployeeResolve', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeResolve = TestBed.get(EmployeeResolve);
    expect(service).toBeTruthy();
  });
});
