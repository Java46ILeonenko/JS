console.log("1:");

const arr1 = [1, 4, 9];
let myForEach = function(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
};
myForEach(arr1, (n, i, a) => {
    let newVal = Math.pow(n, i);
    console.log("Value in the power of it's index "+ newVal);
});

console.log("2:");

let myMap = function(array, callback) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      newArr.push(callback(array[i], i, array));
    }
    return newArr;
};

const arrEx2 = [8,5,3];

const checkArray = myMap(arrEx2, (n, i, a) => n * 3);

console.log(`    Array: ` + `[` + arrEx2 + `]`);
console.log(`New Array: ` + `[` + checkArray + `]`);

