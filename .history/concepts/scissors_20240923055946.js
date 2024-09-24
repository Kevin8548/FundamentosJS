const btnPLay =  document.querySelector(button);
const divUser = document.querySelector(p) ;
const divMaq =  document.querySelector(x);
const message =  document.querySelector(h1);

const play = () => {
    const choiceUser = prompt('Elige: piedra, papel o tijeras').toLowerCase();
    const options = ['piedra', 'papel', 'tijeras'];
    const aleatorio = Math.floor(Math.random() * 3);
    const choiceMaq = options[aleatorio];
    switch(aleatorio){
        case 0:
    message.innerText = "Si"
    break;
    }
    //Todo
    //Si aleatorio = 0 choicemaq= piedra y asi para 1  y 2
    //Comparaciones para determinar ganador
}