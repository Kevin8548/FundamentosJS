// apuntar al div
const ball = document.querySelector('div');
const message = document.querySelector('h1');

const eightball = () => {
    // TODO
    // crear numero aleatorio (0-8)
    // switch/case para mensajes distintos
    const phrase = Math.floor(Math.random() * 8);
    message.innerText = "Le diste click! waos"
}

ball.addEventListener('click', eightball);