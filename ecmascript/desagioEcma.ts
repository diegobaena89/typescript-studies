// Exercício 1
const dobro = (valor: number): number => valor * 2
console.log(dobro(10))

// Exercício 2
const dizerOla = (nome: string = 'Pessoa') => {
  console.log(`Olá ${nome}`)
}
dizerOla('Ana')

// Exercício 3
const nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))

// Exercício 4
const num2 = [-3, 33, 38, 5]
const array = [55, 20]
console.log([...array, ...num2])

// Exercício 5
const notas = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)


