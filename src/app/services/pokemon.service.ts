import { Injectable, signal } from '@angular/core';
import { PkmnResInterface } from '../types/pokemonResponses.types';
import { BehaviorSubject, Observable, map, mergeMap } from 'rxjs';
import { HttpClient, withFetch } from '@angular/common/http';
import { pkmnURL, pkmonObj } from '../utility/fetchPokemon.request';
import { getPokedexId } from '../utility/getPokedexID.utility';
import { getPokedexImage } from '../utility/getPokemonImage.utility';
import { response } from 'express';

interface apiResponse {
  count: number;
  next: string | null;
  previous: null | string;
  results: Object[];
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonRequest = signal<PkmnResInterface[]>([]);

  constructor(private http: HttpClient) {}

  getData() {
    this.http
      .get(pkmnURL)
      .pipe(
        map((response: any) => {
          response.results.forEach((item: any) => {
            item.image = getPokedexImage(getPokedexId(item.url));
            item.pokedexID = getPokedexId(item.url);
          });
          return response;
        })
      )
      .subscribe((response: any) => {
        this.pokemonRequest.set(response.results);
      });
  }

  returnState() {
    return this.pokemonRequest();
  }
}

// subscribe((response) => {
//       console.log(response)
//  map((item) => {
//    {
//      item.pokedexID = getPokedexId(item.url);
//      item.image = getPokedexImage(getPokedexId(item.url));
//    }
//  });
