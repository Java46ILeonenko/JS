console.log("1:");

let myForEach = function(array, callback) {  
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
let myFilter = function(array, callback){
  const res = [];
  function forEachCall(n, i, a) {
      if (callback(n, i, a) == true)
      res.push(n);
  }
  myForEach(array, forEachCall);
  return res;
}
const ex = [2,4,5,7,8,9,10];
const array0 = myFilter(ex, (n, i, a) => a.length % 2 == 0 ? n % 2 == 0 : n % 2 == 1);
const array1 = myFilter(ex, (n, i, a) => Math.pow(n, 2) - a.length > 0);
console.log(`  1:`, array0, ` 2:`,array1);

console.log("2:");

function createPerson(id, name, address) {
  return {id, name, address};
}
function createAddress(city, street) {
  return {city, street}
}
const persons = [
  createPerson(123, "Vasya", createAddress("Rehovot","Parshani")),
  createPerson(124, "Olya", createAddress("Rehovot","Pr.Plaut")),
  createPerson(125, "Tolya", createAddress("Tel-Aviv","Dizengoff")),
  createPerson(126, "Sara", createAddress('Lod', 'Sokolov'))
]
function getPersonsCity(persons, city) {
  const res = [];
  persons.forEach((p, i) => {
  if (persons[i].address.city === city)
  res.push(JSON.stringify(p))
  });
  return res;
}
const rehovot = getPersonsCity(persons, "Rehovot");
console.log(`  Rehovot :`,rehovot);

console.log("3:");

persons.sort((a, b) => a.address.city != "Rehovot"? -1 : 1);
console.log(`  `,persons);