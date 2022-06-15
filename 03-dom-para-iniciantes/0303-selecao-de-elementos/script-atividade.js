// Retorne no console todas as imagens do site

const img = document.querySelectorAll('img');
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('img[src ^= "img/imagem"]');
console.log(imagens);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href ^= "#"]');
console.log(linksInternos)
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector('.animais-descricao h2');
console.log(primeiroh2);
// Selecione o último p do sit
const lastP = document.querySelector( '.copy p')
console.log(lastP);

const paragrafo = document.querySelectorAll('p');
console.log(paragrafo[--paragrafo.length]);