@geral
Feature: Validacao do carrinho apos busca do produto
	@teste1 
	Scenario: Realizar busca do produto
		Given que acessar o site "https://www.shoestock.com.br/"
		When digitar o nome do produto no "Campo de busca"
		And apertar o botao "Buscar"
		Then sera apresentado os resultados referentes ao produto pesquisado
	@teste2	
	Scenario: Incluir produto no carrinho
		Given que acessear o site "https://www.shoestock.com.br/"
		When digitar o nome do produto no "Campo de busca"
		And apertar o botao "Buscar"
		And clicar no produto desejado
		And Selecionar a numeracao desejada
		And Clicar em comprar
		Then sera apresentada do carrinho
	
	
			
