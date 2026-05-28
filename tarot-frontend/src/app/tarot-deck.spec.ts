import { TestBed } from '@angular/core/testing';

import { TarotDeck } from './tarot-deck';

describe('TarotDeck', () => {
  let service: TarotDeck;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarotDeck);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
