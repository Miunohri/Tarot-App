import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TarotState } from '../tarot-state';

@Component({
  selector: 'app-question',
  imports: [FormsModule, CommonModule],
  templateUrl: './question.html',
  styleUrl: './question.css',
})
export class Question {

  constructor (private router: Router, private state: TarotState) {}

  goToShuffle() {
    this.state.question = this.question;
    this.router.navigate(['/shuffle'])
  }

  question = '';
  result: any;


}
