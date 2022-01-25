const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const checkName = (cb) => cb.firstName === employeeName || cb.lastName === employeeName;
  return data.employees.find(checkName);
}

console.log(getEmployeeByName());
module.exports = getEmployeeByName;
