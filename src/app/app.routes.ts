import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { ProvaPage } from './prova/prova.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'sobre', component: ProvaPage }
];
