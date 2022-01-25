/* eslint-disable keyword-spacing */
const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function isManager(id) {
  const people = data.employees.find((callback) => callback.id === id);

  if (people.id === stephanieId || people.id === olaId || people.id === burlId) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const array = [];
    const colaboradores = data.employees.filter((cb) => cb.managers.includes(managerId));
    for(const colaborador of colaboradores) {
      array.push(`${colaborador.firstName} ${colaborador.lastName}`);
    }
    return array;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
module.exports = { isManager, getRelatedEmployees };
