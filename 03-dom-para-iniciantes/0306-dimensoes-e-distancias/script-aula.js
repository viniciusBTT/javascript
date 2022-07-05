const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll



 

// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;








const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll





console.log(  
  window.innerWidth, // width do janela
  window.outerWidth, // soma dev tools também
  window.innerHeight, // height do janela
  window.outerHeight, // soma a barra de endereço
  
  window.pageYOffset, // distância total do scroll vertical (altura do site)
  window.pageXOffset, // distância total do scroll horizontal
);

if(window.innerWidth < 600) {//verificando o tamanho da tela do usuario
  console.log('Tela menor que 600px');
}

const small = window.matchMedia('(max-width: 600px)');// nao usar condicionais como <, &, >. umas usar max/min-width

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}



