import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tarot-frontend');

  question = '';
  result: any;

  constructor(private http: HttpClient) {}

  getReading() {
    this.http.post('http://localhost:8080/reading', {
      question: this.question
    }).subscribe((res) => {
      this.result = res;
    });
  }
}
