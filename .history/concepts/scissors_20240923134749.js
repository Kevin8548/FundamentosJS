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
    });
});

pcChoiceImage.src = `img/${choiceMaq}.jpeg`; // Asegúrate de que las imágenes estén correctamente nombradas
pcChoiceImage.alt = choiceMaq.charAt(0).toUpperCase() + choiceMaq.slice(1);
pcChoiceImage.style.display = 'block'; // Mostrar la imagen

divUser.innerHTML = `<h1>Tu elegiste: ${userChoice}</h1>`;
divMaq.innerHTML = `<h1>La máquina eligió: ${choiceMaq}</h1>`;


btnPlay.addEventListener('click', () => {
    if (!userChoice) {
        alert('Por favor, selecciona piedra, papel o tijeras primero.');
        return;
    }

    const options = ['piedra', 'papel', 'tijeras'];
    const aleatorio = Math.floor(Math.random() * 3);
    const choiceMaq = options[aleatorio];
    
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
