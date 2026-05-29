import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TarotState } from '../tarot-state';

interface SpreadOption {
    id: string;
    name: string;
    intro: string;
    points?: string[];
    cardCount: number;
  }

@Component({
  selector: 'app-spread',
  imports: [CommonModule, FormsModule],
  templateUrl: './spread.html',
  styleUrl: './spread.css',
})
export class Spread {

  constructor(private router: Router, private state: TarotState) {}

  selectedSpread: SpreadOption | null = null;

  spreads: SpreadOption[] = [
    {
      id: 'single',
      name: 'single card',
      intro: 'a beginner friendly spread that is good for daily readings',
      cardCount: 1
    },
    {
      id: 'three',
      name: 'three card',
      intro: 'a spread representing:',
      points: ['the past', 'the present', 'the future'],
      cardCount: 3
    },
    {
      id: 'five',
      name: 'five card',
      intro: 'a spread representing:',
      points: ['the past', 'the present', 'hidden influences', 'advice and insight', 'outcome'],
      cardCount: 5
    },
    {
      id: 'celtic',
      name: 'celtic cross',
      intro: 'a 10-card spread good for addressing a specific question or topic, or to give an overview of your life at present. the cards represent:',
      points: ['the present', 'obstacles and challenges', 'the past', 'the future', 'intentions or goals', 'hidden internal influences', 'advice and insight', 'outside influences', 'hopes and fears', 'outcome or consequences'],
      cardCount: 10
    },
    {
      id: 'horseshoe',
      name: 'horseshoe',
      intro: 'a 7-card spread good for addressing a specific question or topic. cards represent:',
      points: ['the past', 'the present', 'hidden influences', 'obstacles', 'outside influences', 'the solution, advice, or insight', 'outcome or consequences'],
      cardCount: 7
    },
    {
      id: 'mandala',
      name: 'mandala',
      intro: 'a 9-card spread good for self-reflection. cards represent:',
      points: ['the current mindset/situation', 'ambitions and desires', 'hopes and dreams', 'achievements', 'dependencies and obsessions', 'your strengths and positive aspects', 'your weaknesses and faults, things you can improve on', 'self-perception', 'your higher purpose or deepest desires'],
      cardCount: 9
    },
    {
      id: 'tree',
      name: 'tree of life',
      intro: 'a 10-card spread representing your spiritual journey/purpose in universe. cards represent:',
      points: ['the present','your responsibilities', 'difficulties or limitations', 'help or support', 'obstacles and hurdles', 'achievements and accomplishments', 'attraction, things you are drawn to and relationships with key people in your life', 'work, health, communication', 'hidden aspects and influences', 'your physical self and the world are you'],
      cardCount: 10
    }
  ]

  selectSpread(spread: SpreadOption) {
    this.selectedSpread = spread;
    this.state.selectedSpread = spread;
  }

  goToQuestion() {
    this.router.navigate(['/question'])
  }

}