// Exemplo de objectos em JavaScript ;
//Os Objetos são declarados dentro de { }
 // Conforme exemplo Abaixo:

let amigo ={nome:'Jose',
sexo: 'M',
 peso: 85.4,
  engordar(p=0){
console.log('Engordou')
this.peso += p;  
  } }

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`);
