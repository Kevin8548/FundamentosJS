//Coleccion de objetos
//[1, 2, 3, 4]

const numbers = [1, 2, 3, 4];
console.log(numbers);
console.log(numbers[2]);
console.log(numbers[3]);
numbers[4] = "four";
numbers[0] = 10;
console.log(numbers);

//Colas arrays en JS
const queue = [];
console.log(queue);
//insertar al final push
queue.push(1);
console.log(queue);
queue.push(2);
console.log(queue);
queue.push(3);
console.log(queue);
//extraer al inicio
console.log(queue.shift());
console.log(queue);
