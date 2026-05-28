import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spread } from './spread';

describe('Spread', () => {
  let component: Spread;
  let fixture: ComponentFixture<Spread>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spread],
    }).compileComponents();

    fixture = TestBed.createComponent(Spread);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
