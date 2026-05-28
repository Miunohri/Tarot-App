import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  imports: [FormsModule, CommonModule],
  templateUrl: './question.html',
  styleUrl: './question.css',
})
export class Question {

  constructor (private router: Router) {}

  goToShuffle() {
    this.router.navigate(['/shuffle'])
  }

  question = '';
  result: any;


}
