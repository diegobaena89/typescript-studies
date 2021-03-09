"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// Exercício 1
var dobro = function (valor) { return valor * 2; };
console.log(dobro(10));
// Exercício 2
var dizerOla = function (nome) {
    if (nome === void 0) { nome = 'Pessoa'; }
    console.log("Ol\u00E1 " + nome);
};
dizerOla('Ana');
// Exercício 3
var nums = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, nums));
// Exercício 4
var num2 = [-3, 33, 38, 5];
var array = [55, 20];
console.log(__spreadArray(__spreadArray([], array), num2));
// Exercício 5
var notas = [8.5, 6.3, 9.4];
var nota1 = notas[0], nota2 = notas[1], nota3 = notas[2];
console.log(nota1, nota2, nota3);
//# sourceMappingURL=desagioEcma.js.map