import { TestBed, async, inject } from '@angular/core/testing';

import { MyCanDeactiveGuard } from './my-can-deactive.guard';

describe('MyCanDeactiveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyCanDeactiveGuard]
    });
  });

  it('should ...', inject([MyCanDeactiveGuard], (guard: MyCanDeactiveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
