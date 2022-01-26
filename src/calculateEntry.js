const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const object = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) {
      object.child += 1;
    }
    if (element.age >= 18 && element.age < 50) {
      object.adult += 1;
    }
    if (element.age >= 50) {
      object.senior += 1;
    }
  });
  return object;
}

function calculateEntry(entrants) {
  const { prices } = data;
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return child * prices.child + adult * prices.adult + senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
