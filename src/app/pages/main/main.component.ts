import { Component, Input, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { PkmnResInterface } from '../../types/pokemonResponses.types';
import { PokemonContainerComponent } from '../../components/pokemonContainer/pokemonContainer.component';

@Component({
  selector: 'app-pokemonapp-main',
  standalone: true,
  imports: [CommonModule, PokemonContainerComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  // providers: [PokemonService],
})
export class MainComponent {
  @Input() pokemon$: PkmnResInterface[];
  constructor(private pkService: PokemonService) {
    this.pkService.getData();
    this.pokemon$ = pkService.pokemonRequest();
  }

  getData() {
    console.log(this.pokemon$);
  }
}
