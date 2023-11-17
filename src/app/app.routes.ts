import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { SecondaryComponent } from './pages/secondary/secondary.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'pokemon', component: MainComponent },
  { path: 'secondary', component: SecondaryComponent },
  { path: '404', component: PageNotFoundComponent },
  //redirect
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];
