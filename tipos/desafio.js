"use strict";
// Criar um objeto funcionario com :
// array de strings com os nomes dos supervisores
// função de bater ponto que recebe a hora e retorna uma string
//ponto normal <= 8
//fora do horario > 8
//Alias
let Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario) {
        if (horario >= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
console.log(Funcionario.supervisores);
console.log(Funcionario.baterPonto(8));
console.log(Funcionario.baterPonto(6));
// Union types 
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '9854684',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Diego Baena',
    contaBancaria: contaBancaria,
    contatos: ['161681684', '184684984']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=desafio.js.map