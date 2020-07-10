
const _options_produtos = [
  { value: null , text: "Selecione um produto"},
  { value: { "codigo": 1, "descricao": "Cerveja", "valor": 1.99 }, text: "Cerveja" },
  { value: { "codigo": 2, "descricao": "Farinha de mandioca", "valor": 4.55 }, text: "Farinha de mandioca" },
  { value: { "codigo": 3, "descricao": "Queijo", "valor": 19.99 }, text: "Queijo" }
];

  
  export default {
    getProdutos () {
      return _options_produtos;
    }
  }
  