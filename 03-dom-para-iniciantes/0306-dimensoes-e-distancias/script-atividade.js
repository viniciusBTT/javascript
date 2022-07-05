// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img')
console.log(primeiraImg.offsetTop);


// Retorne a soma da largura de todas as imagens
const tamanhoImg = document.querySelectorAll('img')
function somaImagens() {
  let soma = 0;
    tamanhoImg.forEach((tamanhoImg) => {
    soma += tamanhoImg.offsetWidth;
  });
  console.log(soma)
}
window.onload = function(){
  somaImagens();
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
console.log(links)
function linkOk(){
  links.forEach((links) =>{
    let a = links.getBoundingClientRect()
    console.log(a.height, a.width)
    if ((a.height >= 48) && (a.width >= 48)){
      console.log('tamanho ok')
    }else{
      console.log('tamanho ruim')
    }
  })
}


window.onload = function(){
  linkOk();
}
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu');
if(window.innerWidth <= 720 ){
  menu.classList.add('menu-mobile');
}