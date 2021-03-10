"use strict";
/*
// let & const
console.log(seraQuePode)
let seraQuePode = '?' //hoisting

let estaFrio = true;
if(estaFrio){
  let acao = 'colocar o casaco'
}
console.log(acao)

const cpf: string = '123.456.789-10'
console.log(cpf)

//let e const têm escopo de globo
// quando definimos uma const dentro de uma função ou um bloco ela estará visível apenas dentro daquele bloco.

function revelar() {
  const segredo = 'interno'
  console.log(segredo)
}
revelar()
console.log(segredo)

// Arrow function
// anonima
const somar = function(n1: number, n2: number): number {
  return n1 + n2
}
console.log(`O valor é: ${somar(2, 2)}`)

// arrow
const subtrair = (n1: number, n2: number): number => n1 - n2
console.log(subtrair(2, 3))

const saudacao = () => console.log("Olá")
saudacao()

const falarCom = (pessoa: string) => console.log('Ola' + pessoa)
falarCom('Diego')

function normalComThis() {
  console.log(this)
}

const normalComThisEspecial = normalComThis.bind(2)

normalComThisEspecial()

// Parâmetro Padrão

function contagemRegressiva(inicio: number = 3): void {
  console.log(inicio)
  while(inicio > 0) {
    inicio --
    console.log(inicio)
  }
  console.log("Fim")
}
contagemRegressiva()

// Spread e Rest
const numbers = [1, 10, 99, -5]
console.log(Math.max(...numbers))

const turmaA: string[] = ['João', 'Fernanda', 'Guilherme']
const turmaB: string[] = ['Lucas', 'Felipe', 'Amanda']
console.log(...turmaA, ...turmaB)

function retornaArray(...args: number[]): number[] {
  return args
}

const numeros = retornaArray(1, 2, 4, 5, 7)
console.log(numeros)
// DESTRUCTURING ( ARRAY )

const caracteristicas = ['Motor Zetec', 2020]
//const motor = caracteristicas[0]
//const ano = caracteristicas[1]

const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)
*/
// DESTRUCTURING ( OBJETO )
const item = {
    nome: 'SSD 480GB',
    preco: 200
};
//const nomeItem = item.nome
//const preco = item.preco
const { nome: n, preco } = item;
console.log(n);
console.log(preco);
//# sourceMappingURL=ecmascript.js.map