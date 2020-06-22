let rs = require('readline-sync');

console.log('Informe o tamanho do quadrado')
let quadradoX = rs.question('Horizontal: ');
let quadradoY = rs.question('Vertical: ');
let area = quadradoX * quadradoY;

console.log('O tamanho da sua área é: ' + area + 'cm!');