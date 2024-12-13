console.log("Basic Calculator");
let sign = prompt("enter the arithmetic operator(+,-,*,/");
let sign1 = ["+", "-","*","/"];
let number1 = prompt("enter the first number");
let number2 = prompt("enter the second number");
number1 = Number.parseInt(number1,10);
let perform;
switch(sign){
    case "+" :
        perform = number1 + number2;
        break;
    case "-" :
        perform = number1 - number2;
        break;
    case "*" :
        perform = number1 * number2;
        break;
    case "/" :
        perform = number1 / number2;
        break;
        default : 
        perform: parseInt("invalid");
        break;
}

alert(perform);