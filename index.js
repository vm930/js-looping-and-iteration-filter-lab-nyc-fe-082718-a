// Code your solution in this file
function findMatching (drivers, str) {
  const newDrivers = drivers.toLowerCase();
  return newDrivers.filter(str => str === newDrivers);
}

//fuzzyMatch()
function fuzzyMatch (drivers, str){
  return drivers.filter(driver => str === driver);
}

//matchName()

function matchName (drivers, str){
  const newDriver = drivers.filter(str => str === drivers.name);
  return newDriver;
}