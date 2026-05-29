import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Spread } from './spread/spread';
import { Question } from './question/question';
import { Shuffle } from './shuffle/shuffle';
import { Reading } from './reading/reading';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'spread', component: Spread },
    { path: 'question', component: Question },
    { path: 'shuffle', component: Shuffle},
    { path: 'reading', component: Reading}
]
