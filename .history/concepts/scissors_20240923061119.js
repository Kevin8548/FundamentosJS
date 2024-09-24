const btnPlay = document.getElementById('playBtn');
const divUser = document.querySelector('div2');
const divMaq = document.querySelector('div4');
const resultDiv = document.getElementById('result'); // Cambiado para usar div5

const play = () => {
    const choiceUser = prompt('Elige: piedra, papel o tijeras').toLowerCase();
    const options = ['piedra', 'papel', 'tijeras'];
    const aleatorio = Math.floor(Math.random() * 3);
    const choiceMaq = options[aleatorio];

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
