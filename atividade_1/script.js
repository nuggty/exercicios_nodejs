let rs = require('readline-sync');

let nomeUsuario = rs.question('Olá, bem vindo! Como se chama? ');
let numeroVoo = rs.question('Qual é o número do seu vôo? ');
let escolherFileira = rs.question('Escolha a fileira que deseja sentar: "A", "B", "C", "D", "E" ou "F". Por favor, escreva em maiúsculo. ');

console.log('Bem vindo(a) ' + nomeUsuario + '!');

if (escolherFileira == 'A' || escolherFileira == 'B' || escolherFileira == 'C' || escolherFileira == 'D' || escolherFileira == 'E' || escolherFileira == 'F' ) {
    console.log(' Seu voo é: ' + numeroVoo + ';   Fileira: ' + escolherFileira + '.');
    
    console.log('Obrigado por escolher nossa companhia e tenha uma ótima viagem');
}
else {
    console.log('Informação incorreta, por favor, tente novamente.');
}

