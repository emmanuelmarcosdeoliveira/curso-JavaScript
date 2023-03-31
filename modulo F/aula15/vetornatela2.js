let num = [5,8,2,9,3];
num.push(1);
num.sort()
console.log(num);
console.log(`O Array tem ${num.length} posições (valores dentro desse Array)`)
console.log(`A primeira posição desse Array é ${num[0]}`)
let pos = num.indexOf(8)
if(pos === -1){
  console.log("Posição não encontrada ")
}else {
  console.log(`O valor 08 esta na posição ${pos}`) 
}
// Caso o valor aparecer -1 (isso significa que esta posição (numero dentro do Arry não existe !))