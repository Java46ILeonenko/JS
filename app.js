console.log("1:");

function countOccurrences(array) {
  const res = {};
  array.reduce((_cur, n) => res[n] === undefined ? res[n] = 1 : res[n]++, 0);
  return res;
}
function displayOccurrences(array) {
  const res = countOccurrences(array);
  Object.entries(res).sort((e1, e2) =>
  e2[1] - e1[1] === 0 ? e1[0].localeCompare(e2[0]) : e2[1] - e1[1]
  ).forEach(e => console.log(`${e[0]} -> ${e[1]}`))
}
const a = ["lmn","d","d","lmn","a","lmn","a","bc"];
console.log(`Word count = ${a.length}`);
displayOccurrences(a);

console.log("2:");

function countBy(array, callbackFun) {
  return countOccurrences(array.map((n, i, a) => callbackFun(n, i, a)));
}
const a0 = [6.4, 7.3, 6.5, 6.9];
const statistics0 = countBy(a0, element => Math.floor(element));
console.log("   1:",statistics0,"\n");

const a1 = ['abcd', 'lmnr', 'ab', 'dddd'];
const statistics1 = countBy(a1, element => element.length);
console.log("   2:",statistics1,"\n");

const a2 = [{age: 25, id: 123, name: 'Vasya'},{age: 50, id: 123, name: 'Vasya'},
{age: 25, id: 123, name: 'Vasya'},{age: 70, id: 123, name: 'Vasya'}];
const statistics2 = countBy(a2, element => element.age);
console.log("   3:",statistics2,"\n")
