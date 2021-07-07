import { TestBed } from '@angular/core/testing';

import { GoToCharactersGuard } from './go-to-characters.guard';

describe('GoToCharactersGuard', () => {
  let guard: GoToCharactersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GoToCharactersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
