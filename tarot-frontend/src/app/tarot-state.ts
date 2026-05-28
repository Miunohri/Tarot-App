import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TarotState {

  selectedSpread: string | null = null;
  question: string = '';

  constructor() {}

}
