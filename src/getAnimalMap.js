const data = require('../data/zoo_data');

// caso o valor seja vazio faz essa função

function countRegions(local) {
  return data.species.filter((elem) => elem.location === local).map((callback) => callback.name);
}

// funções auxiliares da countRegionsWithName que é responsável por pegar o nome dos residents e devolvelos de acordo com a formatação pedida

function nameResidents(callback) { // sem ordem, apenas pega os residents
  return { [callback.name]: callback.residents.map((element) => element.name) };
}

function nameResidentsSort(callback) { // ordena todos os residents
  const residents = callback.residents.map((element) => element.name);
  return { [callback.name]: residents.sort() };
}

// filtragem de acordo com o sexo

function searchSex(local, sex, ordem) {
  const all = data.species.filter((elem) => elem.location === local).map((callback) => {
    const { residents } = callback;
    const sexAnimal = residents.filter((element) => element.sex === sex);
    return sexAnimal;
  });

  const specie = data.species.filter((elem) => elem.location === local).map((cb) => cb.name);
  const namFi = all.map((callback, i) => ({ [specie[i]]: callback.map((cb) => cb.name) }));
  if (ordem === true) {
    return all.map((callback, i) => ({ [specie[i]]: callback.map((cb) => cb.name).sort() }));
  }
  return namFi;
}

function countRegionsWithName(local, ordenado, sex) {
  const animalsRegions = data.species.filter((callback) => callback.location === local);

  let animalsPatches = animalsRegions.map(nameResidents);

  if (ordenado === true) {
    animalsPatches = animalsRegions.map(nameResidentsSort);
    return animalsPatches;
  }
  return animalsPatches;
}

// desmembramento da função principal, caso não seja passado nenhum parametro retorna isso.
const namePerRegion = () => ({
  NE: countRegions('NE'),
  NW: countRegions('NW'),
  SE: countRegions('SE'),
  SW: countRegions('SW'),
});

// test the key includenames and sort are ON or NO, and return with ordem or no.

function formated(object) {
  if (object.includeNames === true && object.sorted === true) {
    return {
      NE: countRegionsWithName('NE', true),
      NW: countRegionsWithName('NW', true),
      SE: countRegionsWithName('SE', true),
      SW: countRegionsWithName('SW', true),
    };
  }
  if (object.includeNames === true) {
    return {
      NE: countRegionsWithName('NE'),
      NW: countRegionsWithName('NW'),
      SE: countRegionsWithName('SE'),
      SW: countRegionsWithName('SW'),
    };
  }
}

// test if the keys are on for sex

function sexOn(options) {
  if (options.sorted === true) {
    return {
      NE: searchSex('NE', options.sex, true),
      NW: searchSex('NW', options.sex, true),
      SE: searchSex('SE', options.sex, true),
      SW: searchSex('SW', options.sex, true),
    };
  }
  return {
    NE: searchSex('NE', options.sex),
    NW: searchSex('NW', options.sex),
    SE: searchSex('SE', options.sex),
    SW: searchSex('SW', options.sex),
  };
}

// principal function

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return namePerRegion();
  }
  if (options.sex !== undefined) {
    return sexOn(options);
  }
  return formated(options);
}

module.exports = getAnimalMap;
