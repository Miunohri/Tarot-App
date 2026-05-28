import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TarotDeck {
  
  deck: string[] = [];

  createDeck() {
    this.deck = [
      'the fool',
      'the magician',
      'the high priestess'
    ];
  }

  shuffle() {
    for (let i = this.deck.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  cutDeck() {
    const mid = Math.floor(this.deck.length / 2);
    this.deck = []
  }
}
