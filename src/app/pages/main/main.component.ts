import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemonapp-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  pkmnData = '';
  pkmnService = inject(PokemonService);

  constructor() {}

  getData() {
    this.pkmnService.getGen1Data();
  }
}
