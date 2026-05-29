import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TarotDeck {
  
  deck: { name: string }[] = [];

  createDeck() {
    this.deck = [
      { name: 'the fool' },
      { name: 'the magician' },
      { name: 'the high priestess' },
      { name: 'the empress' },
      { name: 'the emperor' },
      { name: 'the hierophant' },
      { name: 'the lovers' },
      { name: 'the chariot' },
      { name: 'strength' },
      { name: 'the hermit' },
      { name: 'wheel of fortune' },
      { name: 'justice'},
      { name: 'the hanged man' },
      { name: 'death' },
      { name: 'temperance' },
      { name: 'the devil' },
      { name: 'the tower' },
      { name: 'the star' },
      { name: 'the moon' },
      { name: 'the sun' },
      { name: 'judgement' },
      { name: 'the world' },
      { name: 'ace of wands' },
      { name: 'two of wands' },
      { name: 'three of wands' },
      { name: 'four of wands' },
      { name: 'five of wands' },
      { name: 'six of wands' },
      { name: 'seven of wands' },
      { name: 'eight of wands' },
      { name: 'nine of wands' },
      { name: 'ten of wands' },
      { name: 'page of wands' },
      { name: 'knight of wands' },
      { name: 'queen of wands' },
      { name: 'king of wands' },
      { name: 'ace of cups' },
      { name: 'two of cups' },
      { name: 'three of cups' },
      { name: 'four of cups' },
      { name: 'five of cups' },
      { name: 'six of cups' },
      { name: 'seven of cups' },
      { name: 'eight of cups' },
      { name: 'nine of cups' },
      { name: 'ten of cups' },
      { name: 'page of cups' },
      { name: 'knight of cups' },
      { name: 'queen of cups' },
      { name: 'king of cups' },
      { name: 'ace of swords' },
      { name: 'two of swords' },
      { name: 'three of swords' },
      { name: 'four of swords' },
      { name: 'five of swords' },
      { name: 'six of swords' },
      { name: 'seven of swords' },
      { name: 'eight of swords' },
      { name: 'nine of swords' },
      { name: 'ten of swords' },
      { name: 'page of swords' },
      { name: 'knight of swords' },
      { name: 'queen of swords' },
      { name: 'king of swords' },
      { name: 'ace of pentacles' },
      { name: 'two of pentacles' },
      { name: 'three of pentacles' },
      { name: 'four of pentacles' },
      { name: 'five of pentacles' },
      { name: 'six of pentacles' },
      { name: 'seven of pentacles' },
      { name: 'eight of pentacles'},
      { name: 'nine of pentacles'},
      { name: 'ten of pentacles'},
      { name: 'page of pentacles'},
      { name: 'knight of pentacles'},
      { name: 'queen of pentacles'},
      { name: 'king of pentacles'}
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
    this.deck = [
      ...this.deck.slice(mid),
      ...this.deck.slice(0, mid)
    ]
  }
}
