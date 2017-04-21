import { TestBed, async, inject } from '@angular/core/testing';

import { MyCanActivateGuardGuard } from './my-can-activate-guard.guard';

describe('MyCanActivateGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyCanActivateGuardGuard]
    });
  });

  it('should ...', inject([MyCanActivateGuardGuard], (guard: MyCanActivateGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
