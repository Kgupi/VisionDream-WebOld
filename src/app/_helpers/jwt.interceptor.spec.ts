import { TestBed } from '@angular/core/testing';

import { JwtInterceptor } from './jwt.interceptor';

describe('JwtInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const interceptor: JwtInterceptor = TestBed.get(JwtInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
