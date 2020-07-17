$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ShoestockProdutos.feature");
formatter.feature({
  "line": 2,
  "name": "Validacao do carrinho apos busca do produto",
  "description": "",
  "id": "validacao-do-carrinho-apos-busca-do-produto",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@geral"
    }
  ]
});
formatter.before({
  "duration": 5320479400,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Incluir produto no carrinho",
  "description": "",
  "id": "validacao-do-carrinho-apos-busca-do-produto;incluir-produto-no-carrinho",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@teste2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que acessear o site \"https://www.shoestock.com.br/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "digitar o nome do produto no \"Campo de busca\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "apertar o botao \"Buscar\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "clicar no produto desejado",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Selecionar a numeracao desejada",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Clicar em comprar",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "sera apresentada do carrinho",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.shoestock.com.br/",
      "offset": 21
    }
  ],
  "location": "ShoestockSteps.queAcessearOSite(String)"
});
formatter.result({
  "duration": 2316774900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Campo de busca",
      "offset": 30
    }
  ],
  "location": "ShoestockSteps.digitarONomeDoProdutoNo(String)"
});
formatter.result({
  "duration": 3106105700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Buscar",
      "offset": 17
    }
  ],
  "location": "ShoestockSteps.apertarObotao(String)"
});
formatter.result({
  "duration": 741724500,
  "status": "passed"
});
formatter.match({
  "location": "ShoestockSteps.clicarNoProdutoDesejado()"
});
formatter.result({
  "duration": 2316437000,
  "status": "passed"
});
formatter.match({
  "location": "ShoestockSteps.selecionarANumeracaoDesejada()"
});
formatter.result({
  "duration": 208735500,
  "status": "passed"
});
formatter.match({
  "location": "ShoestockSteps.clicarEmComprar()"
});
formatter.result({
  "duration": 3704703700,
  "status": "passed"
});
formatter.match({
  "location": "ShoestockSteps.seraApresentadaDoCarrinho()"
});
formatter.result({
  "duration": 5073406000,
  "status": "passed"
});
formatter.after({
  "duration": 16500,
  "status": "passed"
});
});