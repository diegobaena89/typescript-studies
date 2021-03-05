"use strict";
// Criar um objeto funcionario com :
// array de strings com os nomes dos supervisores
// função de bater ponto que recebe a hora e retorna uma string
//ponto normal <= 8
//fora do horario > 8
//Alias
var Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto: function (horario) {
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
var nota = 10;
console.log("Minha nota \u00E9 " + nota + "!");
nota = '10';
console.log("Minha nota \u00E9 " + nota + "!");
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'Fulano',
    tel1: '9854684',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Diego Baena',
    contaBancaria: contaBancaria,
    contatos: ['161681684', '184684984']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
