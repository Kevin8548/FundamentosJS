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
        message.innerText = userChoice;
    } else {
        resultDiv.innerText = "¡La máquina gana!";
        message.innerText = choiceMaq;
    }
});
