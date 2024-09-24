const btnPLay =  document.querySelector(button);
const divUser = document.querySelector(p) ;
const divMaq =  document.querySelector(x);
const message =  document.querySelector(h1);

const play = () => {
    const choiceUser = prompt('Elige: piedra, papel o tijeras').toLowerCase();
    const options = ['piedra', 'papel', 'tijeras'];
    const aleatorio = Math.floor(Math.random() * 3);
    const choiceMaq = options[aleatorio];
    
    divUser.innerHTML = `<h1>Tu elegiste: ${choiceUser}</h1>`;
    divMaq.innerHTML = `<h1>La máquina eligió: ${choiceMaq}</h1>`;

    if (choiceUser === choiceMaq) {
         message.innerText = "¡Es un empate!";
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
