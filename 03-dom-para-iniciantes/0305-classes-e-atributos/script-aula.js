const menu = document.querySelector('.menu');
menu.classList.add('ativo', 'azul')
menu.classList.remove('azul')
menu.classList.toggle('ativo')
menu.classList.toggle('azul')//add ou remove a classe
console.log(menu.classList);
//classList.contains( ) - verifica se possui a propriedade 
if(menu.classList.contains('azul')){
  menu.classList.add('possui-azul');
}

console.log(menu.className);
//antiga forma de add ou remover classe menu.className. retorna uma string com os nomes das classes

const animais = document.querySelector('.animais');
console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');
console.log(img.getAttribute('src')); //verifica o valor de uma propriedade
console.log(img.hasAttribute('id')); //verifica se possui a propriedade
img.removeAttribute('alt'); // remove uma propriedade
img.setAttribute('alt', 'Texto Alternativo'); // cria uma propriedade e/ou muda o valor dela