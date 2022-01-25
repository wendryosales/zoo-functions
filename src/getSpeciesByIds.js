/* eslint-disable no-restricted-syntax */
/* eslint-disable keyword-spacing */
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const array = [];
  if (ids[0] === undefined) {
    return array;
  }
  for(const id of ids) {
    array.push(data.species.find((element) => element.id === id));
  }
  return array;
}

module.exports = getSpeciesByIds;
