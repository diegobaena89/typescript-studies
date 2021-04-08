const objetoA: {
  // criação das chaves que DEVEM existir no objeto
  readonly chaveA: string; //readonly não permite a alteraçao da chave
  chaveB: string;
  chaveC?: string; //opcional
  // Index signature
  //deixa aberto para criação de novas chaves
  [key: string]: unknown; 
} = {
  chaveA: 'valor A',
  chaveB: 'valor B'
};

