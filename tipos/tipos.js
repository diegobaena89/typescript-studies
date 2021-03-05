"use strict";
// string
var name = 'Diego';
console.log(name);
//nome = 28;
//numbers
var age = 31;
console.log(age);
//boolean
var isTrueOrFalse = true;
console.log(isTrueOrFalse);
// ====== Explícito
var ageAgain;
ageAgain = 41;
console.log(age);
// ==== Array
var hobbies = ['Cozinhar', 'Esporte'];
console.log(hobbies);
hobbies = [100, 50];
console.log(hobbies);
// tupla - array de quantidades pre-definida de tipos
var address = ['av Principal', 99];
console.log(address);
// enum - estrutura que define vcalores pre definidos
var Cor;
(function (Cor) {
    Cor[Cor["Gray"] = 0] = "Gray";
    Cor[Cor["Green"] = 1] = "Green";
    Cor[Cor["Blue"] = 2] = "Blue";
    Cor[Cor["Orange"] = 3] = "Orange";
    Cor[Cor["Yellow"] = 4] = "Yellow";
    Cor[Cor["Red"] = 5] = "Red";
})(Cor || (Cor = {}));
var myColor = Cor.Green;
console.log(myColor);
var msg = 'Heyo';
// Funções
function returnMsg() {
    return msg;
}
console.log(returnMsg());
function sayHi() {
    console.log('oi');
}
sayHi();
function multiply(numA, numB) {
    return numA * numB;
}
console.log(multiply(2, 3));
var calc;
calc = multiply;
console.log(calc(3, 4));
