const data = require('../data/zoo_data');

const countResidents = (array) => {
  const objeto = {};
  array.forEach((element) => {
    objeto[element.name] = element.residents.length;
  });
  return objeto;
};

function countAnimals(...animal) {
  if (animal[0] === undefined) {
    return countResidents(data.species);
  }
  if (animal[1] === undefined && animal[0] !== undefined) {
    const findANimal = data.species.find((callback) => callback.name === animal[0]);
    return findANimal.residents.length;
  }
}
console.log(countAnimals('giraffes'));
module.exports = countAnimals;
