let rs = require('readline-sync');

console.log('Olá, vamos ver qual é o seu signo?')
let dia = Number(rs.question('Me informe o dia em que nasceu: '));
let mes = Number(rs.question('Agora o mês: '));


if (dia >= 20 && mes == 1 || dia <= 18 && mes == 2) {

    console.log('Seu signo é Aquário!');
}

if (dia >= 19 && mes == 2 || dia <= 20 && mes == 3) {

    console.log('Seu signo é Peixes!');
}

if (dia >= 21 && mes == 3 || dia <= 19 && mes == 4) {

    console.log('Seu signo é Áries!');
}

if (dia >= 20 && mes == 4 || dia <= 20 && mes == 5) {

    console.log('Seu signo é Touro!');
}

if (dia >= 21 && mes == 5 || dia <= 20 && mes == 6) {

    console.log('Seu signo é Gêmeos!');
}

if (dia >= 21 && mes == 6 || dia <= 22 && mes == 7) {

    console.log('Seu signo é Câncer!');
}

if (dia >= 23 && mes == 7 || dia <= 22 && mes == 8) {

    console.log('Seu signo é Leão!');
}

if (dia >= 23 && mes == 8 || dia <= 22 && mes == 9) {

    console.log('Seu signo é Virgem!');
}

if (dia >= 23 && mes == 9 || dia <= 22 && mes == 10) {

    console.log('Seu signo é Libra!');
}

if (dia >= 23 && mes == 10 || dia <= 22 && mes == 11) {

    console.log('Seu signo é Escorpião!');
}
if (dia >= 22 && mes == 11 || dia <= 21 && mes == 12) {

    console.log('Seu signo é Sagitário!');
}

if (dia >= 22 && mes == 12 || dia <= 19 && mes == 1) {

    console.log('Seu signo é Capricórnio!');
}