const btnPlay = document.getElementById('playBtn');
const divUser = document.querySelector('.div2');
const divMaq = document.querySelector('.div4');
const resultDiv = document.getElementById('result');
const userChoiceImage = document.getElementById('userChoiceImage');
const pcChoiceImage = document.getElementById('pcChoiceImage');

const play = () => {
    const choiceUser = prompt('Elige: piedra, papel o tijeras').toLowerCase();
    const options = ['piedra', 'papel', 'tijeras'];
    const images = {
        piedra: 'img/piedra.jpeg',
        papel: 'img/papel.png',
        tijeras: 'img/tijera.webp'
    };

    if (!options.includes(choiceUser)) {
        alert('Por favor, elige una opción válida: piedra, papel o tijeras.');
        return; // Termina la función si la elección es inválida
    }

    const aleatorio = Math.floor(Math.random() * 3);
    const choiceMaq = options[aleatorio];

    // Mostrar la elección del usuario
    userChoiceImage.src = images[choiceUser];
    userChoiceImage.alt = choiceUser.charAt(0).toUpperCase() + choiceUser.slice(1); // Capitaliza el alt
    userChoiceImage.style.display = 'block'; // Mostrar la imagen

    // Mostrar la elección de la máquina
    pcChoiceImage.src = images[choiceMaq];
    pcChoiceImage.alt = choiceMaq.charAt(0).toUpperCase() + choiceMaq.slice(1);
    pcChoiceImage.style.display = 'block'; // Mostrar la imagen

    divUser.innerHTML = `<h1>Tu elegiste: ${choiceUser}</h1>`;
    divMaq.innerHTML = `<h1>La máquina eligió: ${choiceMaq}</h1>`;

    // Comparaciones para determinar el ganador
    if (choiceUser === choiceMaq) {
        resultDiv.innerText = "¡Es un empate!";
    } else if (
        (choiceUser === 'piedra' && choiceMaq === 'tijeras') ||
        (choiceUser === 'papel' && choiceMaq === 'piedra') ||
        (choiceUser === 'tijeras' && choiceMaq === 'papel')
    ) {
        resultDiv.innerText = "¡Tú ganas!";
    } else {
        resultDiv.innerText = "¡La máquina gana!";
    }
};

btnPlay.addEventListener('click', play);
