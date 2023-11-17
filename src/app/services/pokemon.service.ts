import { Injectable, signal } from '@angular/core';
import { PkmnResInterface } from '../types/pokemonResponses.types';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemonRequest = signal<PkmnResInterface[]>([]);
  billy = signal('Jimminiy');

  constructor(private http: HttpClient) {}

  getGen1Data() {
    console.log(this.pokemonRequest());
  }
}
