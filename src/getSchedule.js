/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
const data = require('../data/zoo_data');

const allSpecie = data.species;
const hour = data.hours;

// filtra o elemento por dia e depois retorna o objeto com officeHour e exhibition
function getAnimalsForDay(day) {
  const filter = allSpecie
    .filter((element) => element.availability.includes(day));
  const animalsAvailability = filter.map((element) => element.name);
  const { open, close } = hour[day];

  if (day === 'Monday') {
    return {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  return {
    officeHour: `Open from ${open}am until ${close}pm`,
    exhibition: animalsAvailability,
  };
}

const callAllDays = () => ({
  Tuesday: getAnimalsForDay('Tuesday'),
  Wednesday: getAnimalsForDay('Wednesday'),
  Thursday: getAnimalsForDay('Thursday'),
  Friday: getAnimalsForDay('Friday'),
  Saturday: getAnimalsForDay('Saturday'),
  Sunday: getAnimalsForDay('Sunday'),
  Monday: getAnimalsForDay('Monday'),
});

function desmember(scheduleTarget) {
  const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const animals = allSpecie.map((element) => element.name);
  if (scheduleTarget === 'Monday') {
    return { Monday: getAnimalsForDay('Monday') };
  }
  if (days.includes(scheduleTarget)) {
    return { [scheduleTarget]: getAnimalsForDay(scheduleTarget) };
  }
  if (!days.includes(scheduleTarget) || !animals.includes(scheduleTarget)) {
    return callAllDays();
  }
}

function createArrayDays(animal) {
  const animals = allSpecie
    .filter((element) => element.name === animal);
  return animals[0].availability;
}

function getSchedule(scheduleTarget) {
  const animals = allSpecie.map((element) => element.name);
  if (scheduleTarget === undefined) {
    return callAllDays();
  }
  if (animals.includes(scheduleTarget)) {
    return createArrayDays(scheduleTarget);
  }
  return desmember(scheduleTarget);
}

console.log(getSchedule('lions'));
module.exports = getSchedule;
