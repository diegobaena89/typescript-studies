// Tuples
// Array com tipos específicos e tamanho fixo
const dadosCliente: readonly [number, string] = [1, 'Diego'];
const dadosCliente2: [number, string, string?] = [31, 'Diego', 'Baena']
const dadosCliente3: [number, string, ...string[]] = [31, 'Rafael', 'Fernandes']

// dadosCliente[0] = 100;
console.log(dadosCliente)
console.log(dadosCliente2)

//se adicionarmos valores com pop e push pode dar problemas, por conta da definição inicial

// dadosCliente.pop('Bob') //gera erro

//para prevenir este erro, tanto erm arrays como tuplas, inserimos readonly