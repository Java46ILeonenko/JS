console.log("");

console.log("a" + ("a" - "s") + "a" + "s");      //1
console.log("");

console.log(calculator(5,2,'/'));                //2
function calculator(number1, number2, option) {
    switch(option) {               
        case '+':
             result = number1 + number2;
            break;
    
        case '-':
             result = number1 - number2;
            break;
    
        case '*':
             result = number1 * number2;
            break;
    
        case '/':
             if(number2==0){
                return  ("ERROR");
             }
             else{
                result = number1 / number2;
             }
            break;
        default : return "ERROR: enter operator from '+','-','*','/'";
    }
    return "Result: " +result;
}

console.log("");
console.log(a(5)(10, 3));                        //3
function a(sum) {
    return  function add (b, c) {
        return "Result: " +sum * (b * c);
    }
}

console.log("");