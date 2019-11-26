import { TestBed } from '@angular/core/testing';

import { ProductResolve } from './product.resolve';

describe('ProductResolve', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductResolve = TestBed.get(ProductResolve);
    expect(service).toBeTruthy();
  });
});
