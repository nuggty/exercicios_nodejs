let rs = require('readline-sync');

console.log('Vamos saber a quantidade de letras do seu nome?');

let nome = rs.question('Escreva seu nome: ');

console.log('Seu nome tem' + nome.lengh + ' carácteres!');