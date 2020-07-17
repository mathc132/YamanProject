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
  "duration": 6270086800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Realizar busca do produto",
  "description": "",
  "id": "validacao-do-carrinho-apos-busca-do-produto;realizar-busca-do-produto",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@teste1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "que acessear o site https://www.shoestock.com.br/",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "digitar o nome do produto no \"Campo de busca\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "apertar o botao \"Buscar\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "sera apresentado os resultados referentes ao produto pesquisado",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoestockSteps.queAcessearOSiteHttpsWwwShoestockComBr()"
});
formatter.result({
  "duration": 2193534900,
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
  "duration": 3136765400,
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
  "duration": 759120400,
  "status": "passed"
});
formatter.match({
  "location": "ShoestockSteps.seraApresentadoOsResultadosReferentesAoProdutoPesquisado()"
});
formatter.result({
  "duration": 1007180700,
  "status": "passed"
});
formatter.after({
  "duration": 1232382300,
  "status": "passed"
});
formatter.before({
  "duration": 3599159000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Incluir produto no carrinho",
  "description": "",
  "id": "validacao-do-carrinho-apos-busca-do-produto;incluir-produto-no-carrinho",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@teste2"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "que acessear o site https://www.shoestock.com.br/",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "digitar o nome do produto no \"Campo de busca\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "apertar o botao \"Buscar\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "clicar no produto desejado",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "selecionar a numeracao desejada",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "clicar em comprar",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "sera apresentada a tela de pagamento",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoestockSteps.queAcessearOSiteHttpsWwwShoestockComBr()"
});
formatter.result({
  "duration": 2026982300,
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
  "duration": 4046569600,
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
  "duration": 736648300,
  "status": "passed"
});
formatter.match({
  "location": "ShoestockSteps.clicarNoProdutoDesejado()"
});
formatter.result({
  "duration": 1603253300,
  "status": "passed"
});
formatter.match({
  "location": "ShoestockSteps.selecionarANumeracaoDesejada()"
});
formatter.result({
  "duration": 1233059800,
  "status": "passed"
});
formatter.match({
  "location": "ShoestockSteps.clicarEmComprar()"
});
formatter.result({
  "duration": 1159897000,
  "status": "passed"
});
formatter.match({
  "location": "ShoestockSteps.seraApresentadaATelaDePagamento()"
});
formatter.result({
  "duration": 5005344400,
  "status": "passed"
});
formatter.after({
  "duration": 1011415200,
  "status": "passed"
});
formatter.before({
  "duration": 3636606200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Validar os produtos incluidos no carrinho na tela de pagamento",
  "description": "",
  "id": "validacao-do-carrinho-apos-busca-do-produto;validar-os-produtos-incluidos-no-carrinho-na-tela-de-pagamento",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@teste3"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "que acessear o site https://www.shoestock.com.br/",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "digitar o nome do produto no \"Campo de busca\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "apertar o botao \"Buscar\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "clicar no produto desejado",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "selecionar a numeracao desejada",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "clicar em comprar",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "ser apresentada a tela de pagamento",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "o produto selecionado devera estar no carrinho",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoestockSteps.queAcessearOSiteHttpsWwwShoestockComBr()"
});
formatter.result({
  "duration": 2145088400,
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
  "duration": 3808063900,
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
  "duration": 816021100,
  "status": "passed"
});
formatter.match({
  "location": "ShoestockSteps.clicarNoProdutoDesejado()"
});
formatter.result({
  "duration": 1623742400,
  "status": "passed"
});
formatter.match({
  "location": "ShoestockSteps.selecionarANumeracaoDesejada()"
});
formatter.result({
  "duration": 3152102400,
  "status": "passed"
});
formatter.match({
  "location": "ShoestockSteps.clicarEmComprar()"
});
formatter.result({
  "duration": 1177091300,
  "status": "passed"
});
formatter.match({
  "location": "ShoestockSteps.serApresentadaATelaDePagamento()"
});
formatter.result({
  "duration": 4045893200,
  "status": "passed"
});
formatter.match({
  "location": "ShoestockSteps.oProdutoSelecionadoDeveraEstarNoCarrinho()"
});
formatter.result({
  "duration": 56225100,
  "status": "passed"
});
formatter.after({
  "duration": 1009782300,
  "status": "passed"
});
});