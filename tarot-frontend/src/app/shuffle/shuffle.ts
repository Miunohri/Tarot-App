import { Component } from '@angular/core';
import { TarotState } from '../tarot-state';
import { Router } from '@angular/router';
import { TarotDeck } from '../tarot-deck';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shuffle',
  imports: [CommonModule],
  templateUrl: './shuffle.html',
  styleUrl: './shuffle.css',
})
export class Shuffle {

  constructor(public state: TarotState, private router: Router, private deck: TarotDeck) {}

  ngOnInit() {
    this.deck.createDeck();

    if (this.state.selectedSpread) {
      this.state.cardsRemaining = this.state.selectedSpread.cardCount;
    }
  }

  shuffle() {
    this.deck.shuffle();
  }

  cutDeck() {
    this.deck.cutDeck();
  }

  drawCards() {
    if (!this.state.selectedSpread) return;

    const card = this.deck.drawCards(1)[0];

    this.state.drawnCards.push(card);
    this.state.cardsRemaining--;
  }

  goToReading() {
    this.router.navigate(['/reading']);
  }
}
