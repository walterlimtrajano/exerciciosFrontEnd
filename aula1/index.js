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

//const lojaDeFrutas = ["maçã", "banana", "laranja", "uva", "pera"];

//console.log("Frutas disponíveis na loja:");

//for (let i = 0; i < lojaDeFrutas.length; i++) {
  //  console.log("- " + lojaDeFrutas[i]);
//}

//for (let fruta of lojaDeFrutas) {
  //  console.log("- " + fruta);
//}

//const x = Number(prompt("Digite o valor de x: "));
//const y = Number(prompt("Digite o valor de y: "));

//const soma = (x, y) =>  x + y;

//console.log("A soma de " + x + " e " + y + " é: " + soma(x, y));

//function ehNumeroPar(numero) {
  //  return numero % 2 === 0;
//}

//const ehPar = Number(prompt("Digite um número para verificar se é par ou ímpar: "));

//if (ehNumeroPar(ehPar)) {
  //  console.log(ehPar + " é um número par. (true)");
//} else {
  //  console.log(ehPar + " é um número ímpar. (false)");
//}

//function inverter(palavra) {
  //  return palavra.split('').reverse().join('');
//}

// Exemplo de uso:
//const texto = prompt("Digite uma palavra para inverter: ");
//console.log("Invertida:", inverter(texto));

const pessoa = {
  nome: "Walter",
  idade: 18,
  profissao: "Estudante"
};

// 2. Mostre cada valor no console.
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
console.log("Profissão:", pessoa.profissao);

// 3. Adicione uma nova propriedade cidade ao objeto pessoa.
pessoa.cidade = "João Pessoa";

// 4. Modifique o valor da propriedade idade para um novo número.
pessoa.idade = 25;

// 5. Remova a propriedade profissao do objeto.
delete pessoa.profissao;

// Mostre o objeto final
console.log("Objeto final:", pessoa);

