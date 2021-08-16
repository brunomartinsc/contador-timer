function criarHora(segundos){
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone:'GMT'
    });
}


const relogio = document.querySelector('#relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciarTimer(){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = criarHora(segundos);
    },1000);
}

document.addEventListener('click', function(e){
    const elemento = e.target;
    if(elemento.classList.contains('iniciar')){
        clearInterval(timer);
        iniciarTimer();
        relogio.classList.remove('pausa');
    }
    if(elemento.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pausa');
    }
    if(elemento.classList.contains('zerar')){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        relogio.classList.remove('pausa');
    }
});
