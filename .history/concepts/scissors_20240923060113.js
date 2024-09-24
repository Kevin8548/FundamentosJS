const btnPLay =  document.querySelector(button);
const divUser = document.querySelector(p) ;
const divMaq =  document.querySelector(x);
const message =  document.querySelector(h1);

const play = () => {
    const choiceUser = prompt('Elige: piedra, papel o tijeras').toLowerCase();
    const options = ['piedra', 'papel', 'tijeras'];
    const aleatorio = Math.floor(Math.random() * 3);
    const choiceMaq = options[aleatorio];

    divUser.innerText = `Tú elegiste: ${choiceUser}`;
    divMaq.innerText = `La máquina eligió: ${choiceMaq}`;

    if (choiceUser === choiceMaq) {
        message.innerText = "¡Es un empate!";
    } else if (
        (choiceUser === 'piedra' && choiceMaq === 'tijeras') ||
        (choiceUser === 'papel' && choiceMaq === 'piedra') ||
        (choiceUser === 'tijeras' && choiceMaq === 'papel')
    ) {
        message.innerText = "¡Tú ganas!";
    } else {
        message.innerText = "¡La máquina gana!";
    }
};

buttonnPlay.addEventListener('click', play);