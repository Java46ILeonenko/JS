console.log("1:");
const arHw = [13,28,4,15,25,-10,40,17,27];
const sorted = arHw.slice();
sorted.sort((a,b)=> (a%2)-(b%2));
sorted.sort(function(a,b){
    if((a%2==0) && (b%2==0)){
        return a-b;
    }
    else if((a%2!=0) && (b%2!=0)){
        return b-a;
    }
})
console.log(`Unsorted : [${arHw.toString()}]`);
console.log(`Sorted   : [${sorted.toString()}]`);

console.log("2:");
const source = [[1,2],[3,4],[5,6],[7,8]]; 
const resMatrix = matrixTransp(source);
displayMatrix(resMatrix);
function matrixTransp(matrix) {
const result = [];
    for (let i=0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!result[j]) {
                 result[j] = [];
            };
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}
function displayMatrix(matrix) {
    for (let i=0; i<matrix.length; i++) {
        let row = '';
        for (let j=0; j<matrix[i].length; j++){
            row = row + matrix[i][j] + ' ';
        }
        console.log(row);
    }
}