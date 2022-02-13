console.log(`  [1]:\n`);
function getRandomNumber(min, max) {
    [min, max] = [min, max].sort((a, b) => a - b);
    return Math.floor(Math.random() * ((max + 1) - min) + min);
} 
console.log(getRandomNumber(19, 1));

console.log(`\n  [2]:\n`);
function concatinate(prefix) {
    const result = '' + prefix;
    return function (c) {return result + c};
}
 const app = concatinate('App - ');
 const concat = app('Test status: Done');
 console.log(concat);