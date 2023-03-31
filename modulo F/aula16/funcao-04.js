//Calcular o Fatorial de um numero !
//5! --> isso é Fatorial 
//Isso é a mesma coisa que 5 x 4 x 3 x 2 x 1 

function fatorial (n){
  let fat = 1 
  for(let c = n; c > 1; c-- ){
    fat *= c
  }
  return fat 
}
console.log(fatorial(5))