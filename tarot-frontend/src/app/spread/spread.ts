import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spread',
  imports: [CommonModule, FormsModule],
  templateUrl: './spread.html',
  styleUrl: './spread.css',
})
export class Spread {

  constructor(private router: Router) {}

  selectedSpread: string | null = null;

  spreads = [
    {
      id: 'single',
      name: 'single card',
      intro: 'a beginner friendly spread that is good for daily readings'
    },
    {
      id: 'three',
      name: 'three card',
      intro: 'a spread representing:',
      points: ['the past', 'the present', 'the future']
    },
    {
      id: 'five',
      name: 'five card',
      intro: 'a spread representing:',
      points: ['the past', 'the present', 'hidden influences', 'advice and insight', 'outcome']
    },
    {
      id: 'celtic',
      name: 'celtic cross',
      intro: 'a 10-card spread good for addressing a specific question or topic, or to give an overview of your life at present. the cards represent:',
      points: ['the present', 'obstacles and challenges', 'the past', 'the future', 'intentions or goals', 'hidden internal influences', 'advice and insight', 'outside influences', 'hopes and fears', 'outcome or consequences']
    },
    {
      id: 'horseshoe',
      name: 'horseshoe',
      intro: 'a 7-card spread good for addressing a specific question or topic. cards represent:',
      points: ['the past', 'the present', 'hidden influences', 'obstacles', 'outside influences', 'the solution, advice, or insight', 'outcome or consequences']
    },
    {
      id: 'mandala',
      name: 'mandala',
      intro: 'a spread good for self-reflection. cards represent the current mindset/situation, ambitions/desires, hopes + dreams, achievements, dependencies + obsessions, strengths + positive aspects, faults + weaknesses you can improve on, self-perception, higher purpose/deepest desires'
    },
    {
      id: 'tree',
      name: 'tree of life',
      intro: 'a spread representing your spiritual journey/purpose in universe. cards represent responsibilities, difficulties/limitations, help/support, obstacles/hurdles, achievements/accomplishments, attraction/relationships, work + health + communication, hidden aspects/influences,and your physical self + world around you'
    }
  ]

  selectSpread(id: string) {
    this.selectedSpread = id;
  }

  goToQuestion() {
    this.router.navigate(['/question'])
  }

}