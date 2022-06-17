// Adicione a classe ativo a todos os itens do menu
const itenMenu = document.querySelectorAll('.menu a');
itenMenu.forEach((i) => {
  i.classList.add('ativo');
});
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itenMenu.forEach((i ,index = 0 ) => {
  if(index !== 0)
  i.classList.remove('ativo');
});
// Verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll('img')
img.forEach((i, index = 0) => {

  if(i.hasAttribute('alt')){
  console.log(`Imagem  possui alt `);
  }else{
    console.log(`Imagem não possui alt `)
  }
})
// Modifique o href do link externo no menu
const a = document.querySelector('a[href^="https"]');//condicional: puxa um atributo com a tag A que o href comece com https

a.setAttribute('href','pedro')

