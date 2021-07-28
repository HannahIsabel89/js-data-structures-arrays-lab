// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name){
  return drivers.push(name);
}
//destructivelyAppendDriver('Ralph');
//console.log(drivers);

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}
//destructivelyPrependDriver('Bob');
//console.log(drivers);

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}
//destructivelyRemoveLastDriver();
//console.log(drivers);

function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}
//destructivelyRemoveFirstDriver();
//console.log(drivers);

function appendDriver(name) {
  return [...drivers, name];
}
//appendDriver('Broom');
//console.log(drivers);

function prependDriver(name) {
 return [name, ...drivers];
}
//console.log(prependDriver("Arnold"));
//console.log(drivers);

function removeLastDriver() {
  return drivers.slice(0,2);
}
//console.log(removeLastDriver())
//console.log(drivers)

function removeFirstDriver () {
  return drivers.slice(1,3);
}
//console.log(removeFirstDriver());
//console.log(drivers);