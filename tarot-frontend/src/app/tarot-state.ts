import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TarotState {

  selectedSpread: any = null;
  question: string = '';
  cardCount: number = 0;

  drawnCards: any[] = [];
  cardsRemaining: number = 0;

  constructor() {}

}
