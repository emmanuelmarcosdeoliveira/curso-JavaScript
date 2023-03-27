var hora = 1;
console.log(`Agora são exatamente ${hora} horas`);
if (hora >= 7 && hora <= 12) {
  console.log("Bom dia!");
} else if (hora >= 13 && hora <= 18) {
  console.log("Boa Tarde");
} else if (hora > 18 && hora <= 24) {
  console.log("Boa Noite!");
} else if (hora == 0 || hora <= 6) {
  console.log("Boa Madrugada");
}
