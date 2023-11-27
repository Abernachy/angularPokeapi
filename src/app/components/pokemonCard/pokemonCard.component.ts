import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-pokemonApp-pokemonCard',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './pokemonCard.component.html',
  styleUrl: './pokemonCard.component.css',
})
export class PokemonCardComponent {
  @Input('image') imageUrl: string = '';
  @Input('name') name: string = '';
  @Input('url') apiUrl: string = '';
  @Input('pokedexID') pokedex: string = '';

  getID(id: string) {
    console.log('Here is the id: ', id);

    /// Do the @output thingy to emite the data up and shit like that
  }
}
