//sin parametros y sin retorno
function sayHello(){
    console.log("Hello");
}

sayHello();

//con parametros y sin retorno
function sayHello(name){
    console.log("Hello" + name);
}

sayHelloTo("Juan");

//Con parametros y retorno
function sum (num1, num2){
    return num1 +num2;
}

const result = sum (5, 7);
console.log(result);

//Con parametros opcionales
function multiply(num1, num2 = 1){
    return num1 * num2;
}

console.log(multiply(5));
console.log(multiply(5, 3));