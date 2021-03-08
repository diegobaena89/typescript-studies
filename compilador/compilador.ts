let canal: string = 'Gaveta';
let inscritos: number = 610234;

//canal = inscritos
console.log(`Canal = ${canal}`)

let nome = 'Pedro'
console.log(`Nome = ${nome}`)

function saudar(isManha: boolean) {
  let saudacao: string
  if(isManha) {
    saudacao = 'Bom dia'
  } else {
    saudacao = 'Boa noite'
  }
  return saudacao
}