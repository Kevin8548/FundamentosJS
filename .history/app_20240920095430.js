// apuntar al div
const ball = document.querySelector('div');
const message = document.querySelector('h1');

const eightball = () => {
    // TODO
    // crear numero aleatorio (0-8)
    // switch/case para mensajes distintos
    const phrase = Math.floor(Math.random() * 8);
    switch(phrase){
        case 0:
    console.log("Si ")
    break;
    case 1:
    console.log("No ")
    break;
    case 2:
    console.log("Nel ")
    break;
    case 3:
    console.log("Perro ")
    break;
    case 4:
    console.log("Gato ")
    break;
    case 5:
    console.log("If ")
    break;
    case 6:
    console.log("No 2.0 ")
    break;
    }
    message.innerText = "Le diste click! waos"
}

ball.addEventListener('click', eightball);