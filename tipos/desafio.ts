// Criar um objeto funcionario com :
// array de strings com os nomes dos supervisores
// função de bater ponto que recebe a hora e retorna uma string
//ponto normal <= 8
//fora do horario > 8

type Funcionario ={
  supervisores: string[],
  baterPonto(horas: number) => string
}

//Alias
let Funcionario: Funcionario = {
  supervisores: ['Ana', 'Fernando'],
  baterPonto(horario: number): string {
    if(horario >= 8) {
      return 'Ponto normal'
    } else {
      return 'Fora do horário!'
    }
  }
}
console.log(Funcionario.supervisores)
console.log(Funcionario.baterPonto(8))
console.log(Funcionario.baterPonto(6))

// Union types 
let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`)
nota = '10';
console.log(`Minha nota é ${nota}!`)




let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato ={
  nome: string,
  tel1: string,
  tel2: string | null
}

const contato1: Contato = {
  nome: 'Fulano',
  tel1: '9854684',
  tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

// Desafio

type ContaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria ={
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor
  }
}

type Correntista ={
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: string[]
}

let correntista: Correntista = {
  nome: 'Diego Baena',
  contaBancaria: contaBancaria,
  contatos: ['161681684', '184684984']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)