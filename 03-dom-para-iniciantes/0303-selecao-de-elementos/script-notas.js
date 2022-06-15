const animais = document.getElementById('animais'); 
// buscando um elemento pelo id

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[1])
 //buscando todos os elementos com a classe determinada

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl)
// pegando a  primeira ul

const linksInternos = document.querySelector('[href ^= "#"]');
// ('[href^= http://') o simbulo ^ faz com que ele selecione dentro do atributo href oque começa com #
console.log(linksInternos)
/////////////////////////////////////
const animaisImg = document.querySelectorAll('.animais img' );
//chama todos os intens que possuem as 2 classes.
console.log(animaisImg[0]);

/////////////////////////////

const gridSectionHTML = document.getElementsByClassName('grid-section');//HTMLlist
const gridSectionNode = document.querySelectorAll('.grid-section');//NODE list

primeiraUl.classList.add('grid-section');

// console.log(gridSectionHTML[0]);
// console.log(gridSectionNode[0]);

gridSectionNode.forEach(function(item, index){
  console.log(item)
});

///////////////////////////////////////
const arrayGrid = Array.from(gridSectionHTML); // converte um arrayLike em um array real

arrayGrid.forEach(function(item){
  console.log(item);
})