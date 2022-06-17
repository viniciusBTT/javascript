const menu = document.querySelector('.menu');
menu.classList.add('ativo', 'azul')
menu.classList.remove('azul')
menu.classList.toggle('ativo')
menu.classList.toggle('azul')//add ou remove a classe
console.log(menu.classList);
//classList.contains - verifica se possui a propriedade 
if(menu.classList.contains('azul')){
  menu.classList.add('possui-azul')
}
