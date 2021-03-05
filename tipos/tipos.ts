// string
let name: string = 'Diego'
console.log(name)
//nome = 28;

//numbers
let age: number = 31;
console.log(age)

//boolean
let isTrueOrFalse: boolean = true;
console.log(isTrueOrFalse) 

// ====== Explícito

let ageAgain: number
ageAgain = 41;
console.log(age)

// ==== Array
let hobbies: any[] = ['Cozinhar', 'Esporte']
console.log(hobbies)

hobbies =[100, 50]
console.log(hobbies)

// tupla - array de quantidades pre-definida de tipos
let address: [string, number] = ['av Principal', 99]
console.log(address)

// enum - estrutura que define vcalores pre definidos
enum Cor {
  Gray,
  Green,
  Blue,
  Orange,
  Yellow,
  Red,
}

let myColor: Cor = Cor.Green;
console.log(myColor)
let msg: string = 'Heyo';
// Funções
function returnMsg(): string {
  return msg;
}
console.log(returnMsg())

function sayHi(): void {
  console.log('oi')
}

sayHi();

function multiply(numA: number, numB: number): number {
  return numA * numB;
}

console.log(multiply(2, 3))

let calc: (numeroA: number, numeroB: number) => number
calc = multiply;
console.log(calc(3,4))

// Objetos

let usuario: {nome: string, idade: number} = {
  nome: 'João',
  idade: 27
}
console.log(usuario)