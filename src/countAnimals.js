const data = require('../data/zoo_data');

const countResidents = (array) => {
  const objeto = {};
  array.forEach((element) => {
    objeto[element.name] = element.residents.length;
  });
  return objeto;
};

function countAnimals(animal) {
  if (animal === undefined) {
    return countResidents(data.species);
  }
  if (animal !== undefined) {
    const findANimal = data.species.find((callback) => callback.name === animal.specie).residents;
    if (animal.sex === undefined) {
      return findANimal.length;
    }
    return findANimal.filter((callback) => callback.sex === animal.sex).length;
  }
}

module.exports = countAnimals;
