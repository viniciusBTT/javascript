// const img = document.querySelectorAll('img')

// img.forEach(function(item, index, array){
//   // console.log(item);
// });

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);
titulosArray.forEach(function(item){
 console.log(item);
});
console.log(titulos);
console.log(titulosArray);


const img = document.querySelectorAll('img');
let i = 0;

  

img.forEach(function(){
  if(i < 5)
  console.log(i++);
})

