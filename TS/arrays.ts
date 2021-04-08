// Arrays
export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor)
}

const result = multiplyArgs(1, 2, 3)
console.log(result)

export function concatStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor)
}

const concatenacao = concatStrings('Diego', 'Baena')
console.log(concatenacao)