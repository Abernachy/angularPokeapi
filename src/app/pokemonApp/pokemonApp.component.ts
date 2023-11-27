import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MainComponent } from '../pages/main/main.component';
import { SecondaryComponent } from '../pages/secondary/secondary.component';
import { RouterOutlet } from '@angular/router';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { PokemonCardComponent } from '../components/pokemonCard/pokemonCard.component';

@Component({
  selector: 'app-pokemonapp',
  templateUrl: './pokemonApp.component.html',
  standalone: true,
  imports: [
    NavbarComponent,
    MainComponent,
    SecondaryComponent,
    RouterOutlet,
    PageNotFoundComponent,
  ],
})
export class PokemonAppComponent {}
