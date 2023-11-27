// Makes the Pokemon API request

enum startDex {
  gen1 = 0,
  gen2 = 152,
}
export interface pkmonObj {
  id: string;
  url: string;
}
export const pkmnURL: string = `https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0`;
