

let href = window.location.href;

console.log(href);

function confere(){
  if ( href == 'http://127.0.0.1:5500/03-dom-para-iniciantes/0301-o-que-e-o-dom/'){
    console.log('É igual');
  }
}

/////////////////////////////////////////////
const h1Selecionado = document.querySelector('h1');
const h2Selecionado = document.querySelector('h2');
var h1Classe = h1Selecionado.classList;
function callbackH1(){  
  console.log('Clicou em' , h1Selecionado.innerText );
}

h1Selecionado.addEventListener('click', callbackH1);