export const getPokedexId = (url: string) => {
  // search the url for the pokedexID via regex
  const regex = new RegExp('/+[0-9]+/');
  let searchArray, pokedexId;
  if ((searchArray = regex.exec(url)) !== null) {
    pokedexId = searchArray[0].split('/')[1];
    return pokedexId;
  } else {
    return 'No Pokedex ID found within the string';
  }
};
