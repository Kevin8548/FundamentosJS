// apuntar al div
const ball = document.querySelector('div');
const message = document.querySelector('h1');

const eightball = () => {
    // TODO
    // crear numero aleatorio (0-8)
    // switch/case para mensajes distintos
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
    message.innerText = "Le diste click! waos"
}

ball.addEventListener('click', eightball);