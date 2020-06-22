let rs = require('readline-sync');

console.log('Vamos competir com quantos carácteres um usuário digitou mais?')

let player1 = rs.question('Nome do Player 1: ');
let carac1 = rs.question('Digite qualquer coisa: ')

console.log('Agora aguarde o Player 2 digitar.');

let player2 = rs.question('Nome do Player 2: ');
let carac2 = rs.question('Digite qualquer coisa: ')

console.log('Aguarde o resultado...');

if (carac1 > carac2) {
    console.log('O Player 1 "' + player1 + '" ganhou digitando ' + carac1.length + ' carácteres!');
}
else if (carac1 == carac2) {
    console.log('O dois digitaram a mesma quantidade, EMPATE!');
}
else {
    console.log('O Player 2 "' + player2 + '" ganhou digitando ' + carac2.length + ' carácteres!') 
}