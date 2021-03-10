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

class Carro {
  private velocidadeAtual: number = 0

  constructor(public marca: string, public modelo: string, 
    private velocidadeMaxima: number = 200) {

  }
  private alterarVelocidade(delta: number): number {
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