import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PkmnResInterface } from '../../types/pokemonResponses.types';
import { PokemonCardComponent } from '../pokemonCard/pokemonCard.component';

export const mockPokemon: PkmnResInterface[] = [
  {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    pokedexID: '1',
  },
  {
    name: 'butterfree',
    url: 'https://pokeapi.co/api/v2/pokemon/12/',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
    pokedexID: '12',
  },
  {
    name: 'alakazam',
    url: 'https://pokeapi.co/api/v2/pokemon/65/',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png',
    pokedexID: '65',
  },
];

@Component({
  selector: 'app-pokemonApp-pokemonContainer',
  imports: [CommonModule, RouterLink, PokemonCardComponent],
  standalone: true,
  templateUrl: './pokemonContainer.component.html',
  styleUrl: './pokemonContainer.component.css',
})
export class PokemonContainerComponent {
  @Input() mockData = mockPokemon;
}
