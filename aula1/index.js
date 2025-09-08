//console.log("Olá, mundo!");

//const nome = "Walter";
//console.log("Meu nome é " + nome);

//const idade = 18; 

//if (idade >= 18) {
  //  console.log("Você é maior de idade.");
//} else if (idade === 18) {
  //  console.log("Você acabou de se tornar maior de idade.");
//} else {
  //  console.log("Você é menor de idade.");
//}

//let i=0;
//while (i < 10) {
  //  console.log("Contagem: " + i);
    //i++;
//}

//for (let i = 0; i < 10; i++) {
  //  console.log("Olá, mundo!");
//}

//const nota1 = 7;
//const nota2 = 8;
//const nota3 = 6;
//const nota4 = 9;

//const media = (nota1 + nota2 + nota3 + nota4) / 4;

//console.log("A média das notas é:", media);

//const media = (7 + 8 + 6 + 9) / 4;

//console.log("A média das notas é:", media);

import PromptSync from "prompt-sync";
const prompt = PromptSync();

//const nome = prompt("Digite seu nome: ");

//console.log("Olá, " + nome + "!");

//const a = Number(prompt("Digite o valor de a: "));
//const b = Number(prompt("Digite o valor de b: "));

//const soma = a + b;

//console.log("A soma de " + a + " e " + b + " é: " + soma);

const lojaDeFrutas = ["maçã", "banana", "laranja", "uva", "pera"];

console.log("Frutas disponíveis na loja:");

//for (let i = 0; i < lojaDeFrutas.length; i++) {
  //  console.log("- " + lojaDeFrutas[i]);
//}

for (let fruta of lojaDeFrutas) {
    console.log("- " + fruta);
}

