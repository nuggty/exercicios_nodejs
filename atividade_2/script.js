let rs = require('readline-sync');

let perguntaNome = rs.question('Me informe seu nome: ');
let perguntaMascara = rs.question('Olá ' + perguntaNome + '. Por acaso você está usando máscara quando sai de casa? ');
let perguntaMaos = rs.question('Está lavando as mãos frequentemente? ');

if (perguntaMascara == 'sim' || perguntaMaos == 'sim') {
    console.log('Muito bem! Você se cuidando, parabéns!');
}
if (perguntaMascara == 'sim' || perguntaMaos == 'não') {
    console.log('Que bom que está usando máscara, mas também precisa lavar as mãos para se prevenir, espero que comece!');
}
if (perguntaMascara == 'não' || perguntaMaos == 'sim') {
    console.log('Que bom que está lavando suas mãos, mas precisa usar máscara quando for sair pra rua, mesmo não estando com o covid, o risco de pegar é menor!');
}
else {
    console.log('Você não está cumprindo com o que o Ministério da Saúde está pedindo para fazer para prevenção, se cuide antes que o pior aconteça com você!')
}