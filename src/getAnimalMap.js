const data = require('../data/zoo_data');

function countRegions(local) {
  return data.species.filter((elem) => elem.location === local).map((callback) => callback.name);
}

function countRegionsWithName(local) {
  const findAnimal = data.species.filter((elem) => elem.location === local);

  return findAnimal.forEach((callback) => callback.residents);
}

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return {
      NE: countRegions('NE'),
      NW: countRegions('NW'),
      SE: countRegions('SE'),
      SW: countRegions('SW'),
    };
  }
  if (options.includeNames === true) {
    return {
      NE: countRegionsWithName('NE'),
      NW: countRegionsWithName('NW'),
      SE: countRegionsWithName('SE'),
      SW: countRegionsWithName('SW'),
    };
  }
}
console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
