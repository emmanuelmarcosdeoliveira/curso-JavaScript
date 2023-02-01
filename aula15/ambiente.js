// comando para ver o que tem dentro do array
// let num = [5,8,2,9,3]
// console.log(`Nosso array e o ${num}`)


// -- Para ver a quantidade de indíces dentro do array
// let num = [5,8,2,9,3]
// console.log(`O vetor tem ${num.length} posições`)

// -- comando para ver um determinado valor dentro de um indíce 
//let num = [5,8,2,9,3]
//num.sort()
//console.log(`O vetor tem ${num.length} posições`)
//console.log(`O primeiro valor ao array é ${num[0]} `)

// - comando usado para ver os valores do array em ordem númerica 
//let num = [5,8,2,9,3]
//num.sort()
//console.log(num)
//console.log(`O vetor tem ${num.length} posições`)
//console.log(`O primeiro valor ao array é ${num[0]} `)

// - agora vamos adicionar um valor ao vetor  
let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor ao array é ${num[0]} `)
let pos = num.indexOf(2)
if (pos == -1 ) {
  console.log("O Valor não foi encontrado")
}else {

  console.log(`O valor  está na posição ${pos}`)
}