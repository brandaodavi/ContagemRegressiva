
const horaHTML = document.querySelector('#hora');
const minutoHTML = document.querySelector('#minuto');
const segundoHTML = document.querySelector('#segundo');
const diaHTML = document.querySelector('#dia');
const ano = document.querySelector('#texto');

setInterval(function mostrarRegressao(){
    let dataAtual = new Date();
    let hora = dataAtual.getHours();
    let minuto = dataAtual.getMinutes();
    let segundo = dataAtual.getSeconds();
    let anoNovo = dataAtual.getFullYear() + 1;

    let diferencaDia = new Date ("1 January 2024") - dataAtual;
    let dias = Math.floor(diferencaDia/(1000 * 3600 * 24));
    
    let horasF = 23-hora;
    let minutosF = 59-minuto;
    let segundosF = 59-segundo;
    
    ano.textContent = anoNovo+" CHEGARÁ EM:";
    diaHTML.textContent = verificarZero(dias);
    horaHTML.textContent = verificarZero(horasF);
    minutoHTML.textContent = verificarZero(minutosF);
    segundoHTML.textContent = verificarZero(segundosF);

},1000);

function verificarZero(tempo){
    if(tempo<10){
        return "0"+tempo;
    }else{
        return tempo;
    }
}
