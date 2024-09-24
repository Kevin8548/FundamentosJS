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
    message.innerText = "Le diste click! waos"
    break;
    case 1:
    message.innerText = "Le diste sabdnsfg click! waos"
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
}

ball.addEventListener('click', eightball);