let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio);

let palpites;
let ultimoResultado;
let baixoOuAlto;
let envioPalpite;
let campoPalpite;

let contagemPalpites = 1;
let botaoReinicio;

window.onload = function() {
  palpites = document.querySelector('.palpites');
  ultimoResultado = document.querySelector('.ultimoResultado');
  baixoOuAlto = document.querySelector('.baixoOuAlto');
  
  makeCampoPalpite();
  makeEnvioPalpite();
}

function makeCampoPalpite() {
  campoPalpite = document.querySelector('.campoPalpite');
  campoPalpite.focus();
  campoPalpite.addEventListener('keypress', function(event) {
    // console.log('event = ', event);

    if (event.keyCode === 13) {
      conferirPalpite();
    }
  });
}

function makeEnvioPalpite() {
  envioPalpite = document.querySelector('.envioPalpite');
  envioPalpite.addEventListener('click', conferirPalpite);
}


function conferirPalpite(){
    let palpiteUsuario = Number(campoPalpite.value);
  
  
  if (contagemPalpites === 1){
    palpites.textContent = 'Palpites Anteriores: ';
  }

  palpites.textContent += palpiteUsuario + ' '; 

  if (palpiteUsuario === numeroAleatorio){
    ultimoResultado.textContent = 'Parabens! Você Acertou !';
    ultimoResultado.style.backgroundColor = 'green';
    baixoOuAlto.textContent = '';
    configFimDeJogo();

  } else if(contagemPalpites === 10){
    ultimoResultado.textContent = '!!! FIM DE JOGO !!!';
    baixoOuAlto.textContent = '';
    configFimDeJogo();
    

  } else {
    ultimoResultado.textContent = 'Errado !';
    ultimoResultado.style.backgroundColor = 'red';
    
    if(palpiteUsuario < numeroAleatorio) {
      baixoOuAlto.textContent = 'Seu Palpite esta muito baixo !';
      
    } else if (palpiteUsuario > numeroAleatorio) {
      baixoOuAlto.textContent = 'Seu Palpite esta muito alto! ';
    }
  }

  contagemPalpites++;
  campoPalpite.value = '';
  campoPalpite.focus();
  
}

function configFimDeJogo(){
  campoPalpite.disabled = true;
  envioPalpite.disabled = true;
  botaoReinicio = document.createElement('button');
  botaoReinicio.textContent = 'Novo Jogo';
  document.body.appendChild(botaoReinicio);
  botaoReinicio.addEventListener('click', reiniciarJogo);
  
}

function reiniciarJogo(){
  contagemPalpites = 1;
  
  let reinicarParas = document.querySelectorAll('.resultadoParas p');
  
  for (let i = 0 ; i < reinicarParas.length ; i++) {
    reinicarParas[i].innerHTML = '';
  }

  botaoReinicio.parentNode.removeChild(botaoReinicio);

  campoPalpite.disabled = false;
  envioPalpite.disabled = false;
  campoPalpite.value = '';
  campoPalpite.focus();

  ultimoResultado.style.backgroundColor = 'white';

  numeroAleatorio  = Math.floor(Math.random() * 100) + 1;
  console.log('Novo Numero Aleatorio: ', numeroAleatorio);
}

