/* - nesse eexemplo estamos mostrando a forma mais dificil de solicitar que seja escrito na tela os valores que estão dentro do array 

let valores =  [8,1,7,4,2,9]
console.log(valores)

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/


/* iremos escrever  agora o nosso código de uma  forma  mais inteligente 

let valores = [8,1,7,4,2,9,]
for(let pos =0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// Iremos escrevver o código de forma mais simplificada
let valores =  [8,1,7,4,2,9]
valores.sort()
for(let pos in valores){
  console.log( `A posição ${pos} tem o valor ${valores[pos]}`)
}
  