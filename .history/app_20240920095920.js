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
    message.innerText = "Si"
    break;
    case 1:
    message.innerText = "No"
    break;
    case 2:
    message.innerText = "Gatu "
    break;
    case 3:
    message.innerText = "Los gatos son mejores"
    break;
    case 4:
    message.innerText = "Si pasara"
    break;
    case 5:
    message.innerText = "Ni en sueños"
    break;
    case 6:
    message.innerText = "Tal vez"
    break;
    case 7:
    message.innerText = "Jamas"
    break;
    }
}

ball.addEventListener('click', eightball);