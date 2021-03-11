/*
class Data {
  //publico por padrão
  dia: number
  public mes: number
  ano: number

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4
console.log(aniversario)

const casamento = new Data // pode-se omitir os ()
casamento.ano = 2017
console.log(casamento)



class DataEsperta {
  constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {
  }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversario.dia = 4
console.log(aniversario)

const casamentoEsperto = new DataEsperta // pode-se omitir os ()
casamento.ano = 2017
console.log(casamento)

// Desafio Classe Produto

class Produto {
  constructor(public nome: string, public preco: number, public desconto: number = 0) {

  }

  precoComDesconto(): number {
    return this.preco * (1 - this.desconto)
  }

  public resumo(): string {
    return `${this.nome} custa R$ ${this.precoComDesconto()} (${this.desconto * 100} % off )`
  } 
}
const produto1 = new Produto('Sabão em Pó', 4.20)
const produto2 = new Produto('Bombril', 18.80, 0.15)
console.log(produto1.resumo())
console.log(produto2.resumo())

// Modificadores de Acesso
*/

class Carro {
  private velocidadeAtual: number = 0

  constructor(public marca: string, public modelo: string, 
    private velocidadeMaxima: number = 200) {

  }
  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta
    const velocidadeValida = novaVelocidade >= 0
    && novaVelocidade <= this.velocidadeMaxima

    if(velocidadeValida) {
      this.velocidadeAtual = novaVelocidade
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
    }
    return this.velocidadeAtual
  }
  public acelerar(): number {
    return this.alterarVelocidade(5)
  }
  public frear(): number {
    return this.alterarVelocidade(-5)
  }
}
const carro1 = new Carro('Ford', 'Ka', 185)
// HERANÇA

class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima)
  }
  public acelerar(): number {
    return this.alterarVelocidade(20)
  }
  public frear(): number {
    return this.alterarVelocidade(-15)
  }
}

const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())
console.log(f40.frear())

// Getters & Setters

class Pessoa {
  private _idade: number = 0

  get idade(): number {
    return this._idade
  }

  set idade(valor: number) {
    if(valor >= 0 && valor <= 120) {
      this._idade = valor
    }
  }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1.idade)

pessoa1.idade = -3

// Atributos e médotos estaticos
class Matematica {
  static PI: number = 3.1416

  static areaCirc(raio: number): number {
    return Matematica.PI * raio * raio
  }
}

//const m1 = new Matematica()
//m1.PI = 4.2
//console.log(m1.areaCirc(4))
console.log(Matematica.areaCirc(4))

// Classe Abstrata
// classes abstratas não podem ser instanciadas
// pode-se definir uma função sem dar uma implementação

abstract class Calculo {
  protected resultado: number = 0

  abstract executar(...numeros: number[]): void

  getResultado(): number {
    return this.resultado;
  }
}
class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a)=> t + a)
  }
}
class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a)=> t * a)
  }
}
let c1 = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())


class Unico {
  private static instance: Unico = new Unico
  private constructor() {}

  static getInstance(): Unico{
    return Unico.instance
  }

  agora() {
    return new Date
  }
}

console.log(Unico.getInstance().agora())
