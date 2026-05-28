import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shuffle } from './shuffle';

describe('Shuffle', () => {
  let component: Shuffle;
  let fixture: ComponentFixture<Shuffle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shuffle],
    }).compileComponents();

    fixture = TestBed.createComponent(Shuffle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
