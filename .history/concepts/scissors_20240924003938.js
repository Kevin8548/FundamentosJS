const btnPlay = document.getElementById('playBtn');
const divUser = document.querySelector('.div2');
const divMaq = document.querySelector('.div4');
const resultDiv = document.getElementById('result');
const userChoiceImage = document.getElementById('userChoiceImage');
const pcChoiceImage = document.getElementById('pcChoiceImage');

let userChoice = '';

const choices = document.querySelectorAll('.choice');
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        userChoice = choice.dataset.choice;
        userChoiceImage.src = `path/to/${userChoice}.png`; // Actualiza con la ruta correcta de la imagen
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
    pcChoiceImage.src = `path/to/${choiceMaq}.png`; // Actualiza con la ruta correcta de la imagen

    // Mostrar las elecciones en los divs correspondientes
    divUser.innerHTML = `<h1>Tu elegiste: ${userChoice}</h1>`;
    divMaq.innerHTML = `<h1>La máquina eligió: ${choiceMaq}</h1>`;

    // Determinar el resultado
    if (userChoice === choiceMaq) {
        resultDiv.innerText = "¡Es un empate!";
    } else if (
        (userChoice === 'piedra' && choiceMaq === 'tijeras') ||
        (userChoice === 'papel' && choiceMaq === 'piedra') ||
        (userChoice === 'tijeras' && choiceMaq === 'papel')
    ) {
        resultDiv.innerText = "¡Tú ganas!";
    } else {
        resultDiv.innerText = "¡La máquina gana!";
    }
});
