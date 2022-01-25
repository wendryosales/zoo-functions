const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.filter((element) => element.name === animal);

  return animals.every((element) => element.residents.every((callback) => callback.age >= age));
}

/* console.log(getAnimalsOlderThan('lions', 1)); */
module.exports = getAnimalsOlderThan;
