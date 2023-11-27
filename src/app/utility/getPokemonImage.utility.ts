// This will take the ID from the getPokedexID utility and
export const getPokedexImage = (dexID: string) => {
  const IDvalue = parseInt(dexID);
  const url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
  let imageID: string;
  // We need to see if its less than 100
  switch (IDvalue > 0) {
    case IDvalue < 10:
      imageID = `00${dexID}`;
      break;

    case IDvalue < 100:
      imageID = `0${dexID}`;
      break;

    default:
      imageID = `${dexID}`;
      break;
  }
  return `${url}${imageID}.png`;
};
