const btnPlay = document.getElementById('playBtn');
const divUser = document.querySelector('.div2');
const divMaq = document.querySelector('.div4');
const resultDiv = document.getElementById('result');
const userChoiceImage = document.getElementById('userChoiceImage');
const pcChoiceImage = document.querySelector('.div4 img');

let userChoice = '';

const choices = document.querySelectorAll('.choice');
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        userChoice = choice.dataset.choice;
        userChoiceImage.src = choice.src;
        userChoiceImage.style.display = 'block'; 
    });
});

btnPlay.addEventListener('click', () => {
    if (!userChoice) {
        alert('Por favor, selecciona piedra, papel o tijeras primero.');
        return;
    }

    const options = ['piedra', 'papel', 'tijeras'];
    const aleatorio = Math.floor(Math.random() * 3);
    const choiceMaq = options[aleatorio];

    pcChoiceImage.src = `img/${choiceMaq === 'piedra' ? 'piedra.jpeg' : choiceMaq === 'papel' ? 'papel.png' : 'tijera.webp'}`;

    let message = `Tu elegiste: ${userChoice}. La máquina eligió: ${choiceMaq}. `;

    if (userChoice === choiceMaq) {
        resultDiv.innerText = message + "¡Es un empate!";
    } else if (
        (userChoice === 'piedra' && choiceMaq === 'tijeras') ||
        (userChoice === 'papel' && choiceMaq === 'piedra') ||
        (userChoice === 'tijeras' && choiceMaq === 'papel')
    ) {
        resultDiv.innerText = message + "¡Tú ganas!";
    } else {
        resultDiv.innerText = message + "¡La máquina gana!";
    }

    // Opcional: Mostrar elecciones en los divs
    divUser.innerHTML = `<h1>Tu elegiste: ${userChoice}</h1>`;
    divMaq.innerHTML = `<h1>La máquina eligió: ${choiceMaq}</h1>`;
});

resetBtn.addEventListener('click', () => {
    userChoice = '';
    userChoiceImage.style.display = 'none';
    userChoiceImage.src = '';
    pcChoiceImage.src = 'img/2775.png'; // Ruta de la imagen inicial de la máquina
    resultDiv.innerText = '';
    divUser.innerHTML = '<h1>Tu</h1>'; // Reinicia el contenido del div del usuario
    divMaq.innerHTML = '<h1>PC</h1>'; // Reinicia el contenido del div de la máquina
});