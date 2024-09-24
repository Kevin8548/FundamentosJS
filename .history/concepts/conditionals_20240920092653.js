// if else if else

let age = 18;
if(age >= 18){
    console.log("Es mayor de edad!");
}
else if (age > 15){
    console.log("Es niño!");
}
else {
    console.log("Es menor que un niño!")
}

// Truthy and Falsy
// myNum = 0 --> false
// myNum > 0 --> True
// myNum = '' --> false
// myNum = 'Hi' --> true

// Asignar usuario por defecto
let username = '';
let defaultName;

if(username !== ''){
    defaultName = username;
}
else{
    defaultName = 'Invitado';
}

if(username){
    defaultName = username;
}
else{
    defaultName = 'Invitado';
}

defaultName = username || 'Invitado';

(age >= 18) 
? console.log('Si es mayor')
: console.log('No es mayor')

/**
 * expr ? true : false;
 */
defaultName = username? username: 'Invitado';
console.log(defaultName);


//switch case
const day = Math.floor(Math.random() * 7);
switch(day){
    case 0:
    console.log("Es Domingo ")
    break;
    case 1:
    console.log("Es Lunes ")
    break;
    case 2:
    console.log("Es Martes ")
    break;
    case 3:
    console.log("Es Miercoles ")
    break;
    case 4:
    console.log("Es Jueves ")
    break;
    case 5:
    console.log("Es Viernes ")
    break;
    case 6:
    console.log("Es Sabado ")
    break;
    default:
        console.log("El día no es valido")
}