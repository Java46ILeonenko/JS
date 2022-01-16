function encode(number,codingString){
    let result= "";
    if(duplicate(codingString)==true){
        console.log(`ERROR: "Duplicate symbols"`);
    }
    else{
        do {
            const digit= Math.trunc(number%codingString.length);
            const symbol= getS(digit,codingString);
            result= symbol+result;
            number= Math.trunc(number/codingString.length);
        }while(number>=1);
        return result;
    }
    function getS(digit,codingString) {
        return "" + codingString[digit];
    }
}
function duplicate(codingString){
    return new Set(codingString).size!=codingString.length;
}
console.log(encode(346464634,`+=-90`));