import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Spread } from './spread/spread';
import { Question } from './question/question';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'spread', component: Spread },
    { path: 'question', component: Question }
]
