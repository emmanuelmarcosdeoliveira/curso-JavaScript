function somar() {
  var tn1 = window.document.getElementById('txtn1')
  var tn2 = window.document.querySelector('input#txtn2')
  var res = window.document.getElementById('res')
  var n1 = Number(tn1.value) // isso é necessario para transformar o valor digitado dentro da caixa em numero.
  var n2 = Number(tn2.value) // isso é necessario para transformar o valor digitado dentro da caixa em numero.
  var s = n1 + n2 // estamos criandoa a var s para somar os valores de n1 + n2
  res.innerHTML = `A soma entre os valores ${n1}, e ${n2}, e igual a <strong> ${s}</strong> `
  // o Comando acima exibie o resultado da soma na linha abaixo.

}

