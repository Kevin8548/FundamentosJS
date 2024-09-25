// High order functions
// Funciones de orden superior
// Funciones que reciben
// parametros otras funciones

const suma = (a, b) => a+b;
const resta = (a, b) => a-b;

const calculator = (a, b, callback) => {
    const result = callback (a, b);
    console.log(result);
}

calculator(15, 9, suma);
calculator(15, 9, resta);
calculator(15, 9, (a ,b) => a*b);
calculator(15, 9, (a ,b) => a/b);

const foods = ['Tamales', 'Pambazo', 'Envueltos', 'Memelas', 'Pastes', 'Quesadillas'];

foods.forEach(food => console.log(food));
foods.forEach(food => console.log(food.length));
foods.forEach(food => console.log(food.includes('a')));

const FOODS = foods.map(food => food.toUpperCase());
console.log(FOODS);

const foodsEmojis = foods.map(food => food + '🍖');
console.log(foodsEmojis);

const sdoof = foods.map(food => {
    const separate = food.split('');
     const reversed = separate.reverse();
     const joined = reversed.join('');
     return joined;
     //food => food split('').reverse().join('')
})
console.log(sdoof);

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const squares = numbers.map(num => num * num);
const cubes = numbers.map(num => num * num * num);
const halfs = numbers.map(num => num / 2);
console.log(numbers);
console.log(squares);
console.log(cubes);
console.log(halfs);

function wrapping(gifts) {
    return gifts.map(gift => {
        const tapa = '*'.repeat(gift.length +2);
        return `${tapa}\n*${gift}*\n${tapa}`
    });}

    const foods = ['Tamales', 'Pambazo', 'Envueltos', 'Memelas', 'Pastes', 'Quesadillas'];
    const wrappeds = wrappedGifts(foods);
    wrappeds.forEach(item => console.log(item));

// filter
const foods = ['Tamales', 'Pambazo', 'Envueltos', 'Memelas', 'Pastes', 'Quesadillas'];
const containsZ = foods.filter(food => food.includes('z'));
console.log(foods);
console.log(containsZ);

const endsWithS = foods.filter(food => food.endsWith('s'));
console.log(endsWithS);


const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const pares = numbers.filter( number => number %2 ===0 );
const impares = numbers.filter( number => number %2 !==0 );
const m5 = numbers.filter( number => number < 5 );
const M5 = numbers.filter( number => number > 5 );

console.log(pares);
console.log(impares);
console.log(m5);
console.log(M5);

// forEach, mao, filter

const numeros = [1,2,3,4,5,6,7,8,9,10];

// reuduce
const sumatoria = numeros.reduce ((a, b) => a + b);
const factorial = numeros.reduce ((a, b) => a * b);
console.log(numeros);
console.log(sumatoria);
console.log(factorial);

//some (or) every (and)
const positivos = numeros.every(n => n > 0);
console.log(positivos);
const negativos = numeros.every(n => n < 0);
console.log(negativos);

const ages = [20, 21, 25, 17, 18];
const algunos_mayores = ages.some(n => n >= 18);
console.log(algunos_mayores);
const algunos_menores = ages.some(n => n < 18);
console.log(algunos_menores);

const fruits = ['🍏','🍐','🍊','🍑','🍒'];

const index_durazno = fruits.findIndex(f => f === '🍏');
console.log(fruits[index_durazno]);
