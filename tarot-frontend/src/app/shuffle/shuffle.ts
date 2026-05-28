import { Component } from '@angular/core';
import { TarotState } from '../tarot-state';
import { Router } from '@angular/router';
import { TarotDeck } from '../tarot-deck';

@Component({
  selector: 'app-shuffle',
  imports: [],
  templateUrl: './shuffle.html',
  styleUrl: './shuffle.css',
})
export class Shuffle {

  constructor(public state: TarotState, private router: Router, private deck: TarotDeck) {}

  shuffle() {
    this.deck.shuffle();
  }

  cutDeck() {
    this.deck.cutDeck();
  }

}
