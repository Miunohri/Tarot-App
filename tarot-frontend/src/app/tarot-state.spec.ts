import { TestBed } from '@angular/core/testing';

import { TarotState } from './tarot-state';

describe('TarotState', () => {
  let service: TarotState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarotState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
