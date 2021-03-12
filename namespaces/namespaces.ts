/* 
Os Namespaces são uma forma específica do TypeScript para organizar código. Namespaces são simplesmente objetos JavaScript nomeados no namespace global. Isso torna os namespaces uma construção muito simples de usar. Ao contrário dos módulos, eles podem atingir múltiplos arquivos, e podem ser concatenados usando --outFile.
*/

///<reference path="geometriaCirc.ts"/>
///<reference path="geometriaRect.ts"/>

console.log(Geometria.Area.circunferencia(10))
console.log(Geometria.Area.retangulo(10, 20))
