/* eslint-disable no-restricted-syntax */
/* eslint-disable keyword-spacing */
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const array = [];
  if (ids[0] === undefined) {
    return array;
  }
  ids.forEach((callback) => array.push(data.species.find((element) => element.id === callback)));
  return array;
}

module.exports = getSpeciesByIds;
