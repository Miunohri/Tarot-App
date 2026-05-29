import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TarotState } from '../tarot-state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reading',
  imports: [CommonModule],
  templateUrl: './reading.html',
  styleUrl: './reading.css',
})
export class Reading {

  constructor (private router: Router, public state: TarotState) {}

}
