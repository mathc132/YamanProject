@geral
Feature: Validacao do carrinho apos busca do produto
	@teste1 
	Scenario: Realizar busca do produto
		Given que acessear o site https://www.shoestock.com.br/
		When digitar o nome do produto no "Campo de busca"
		And apertar o botao "Buscar"
		Then sera apresentado os resultados referentes ao produto pesquisado
	
	@teste2	
	Scenario: Incluir produto no carrinho
		Given que acessear o site https://www.shoestock.com.br/
		When digitar o nome do produto no "Campo de busca"
		And apertar o botao "Buscar"
		And clicar no produto desejado
		And selecionar a numeracao desejada
		And clicar em comprar
		Then sera apresentada a tela de pagamento
	
	@teste3
	Scenario: Validar os produtos incluidos no carrinho na tela de pagamento
		Given que acessear o site https://www.shoestock.com.br/
		When digitar o nome do produto no "Campo de busca"
		And apertar o botao "Buscar"
		And clicar no produto desejado
		And selecionar a numeracao desejada
		And clicar em comprar
		And ser apresentada a tela de pagamento
		Then o produto selecionado devera estar no carrinho
			
