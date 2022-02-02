console.log(`\t1:`);

function Deferred(){
    this.array0 = [];
    this.result;
  }
  Deferred.prototype.then = function(e) {
    this.array0.push(e);
  }
  Deferred.prototype.resolve = function(value) {
    this.result = value;
    for (let i = 0; i < this.array0.length; i++) {
        this.result = this.array0[i](this.result);
    }
  }

  const d = new Deferred();
  d.then(function(result){ console.log('1', result); return 'a'; });
  d.then(function(result){ console.log('2', result); return 'b'; });
  d.then(function(result){ console.log('3', result); return 'c'; });
  d.resolve('Hello');

console.log(`\t2:`);

function MyArray(value){
    this.array1 = []; 
    this.value = value;
}
MyArray.prototype.get = function(i) {
    return this.array1[i]? this.array1[i] : this.value;
}
MyArray.prototype.set = function(i,v) {
    this.array1[i] = v;
}
MyArray.prototype.setValue = function (v) {
    this.value = v;
    this.array1 = this.array1.map(n => n = v);
}
const myArray = new MyArray(10);
console.log(myArray.get(100));
myArray.set(100, 500);
console.log(myArray.get(200));
console.log(myArray.get(100));
myArray.setValue(300);
console.log(myArray.get(100));
console.log(myArray.get(200));