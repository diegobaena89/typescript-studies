"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatStrings = exports.multiplyArgs = void 0;
// Arrays
function multiplyArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, valor) { return acc * valor; });
}
exports.multiplyArgs = multiplyArgs;
var result = multiplyArgs(1, 2, 3);
console.log(result);
function concatStrings() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (ac, valor) { return ac + valor; });
}
exports.concatStrings = concatStrings;
var concatenacao = concatStrings('Diego', 'Baena');
console.log(concatenacao);
