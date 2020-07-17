package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Sleeper;

import Manager.DriverManager;
import Manager.DriverManagerFactory;
import Manager.DriverType;
import PageObject.ShoestockMyStorePage;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class ShoestockSteps {
	DriverManager driverManager;
    WebDriver driver;
    ShoestockMyStorePage storePage;
    String produto;
    
	@Before
	public void beforeMethod() {
		driverManager = DriverManagerFactory.getManager(DriverType.CHROME);
		driver = driverManager.getDriver();
		storePage = new ShoestockMyStorePage(driver);
	}

	@After
	public void afterMethod() {
		//driverManager.quitDriver();
	}
	@Given("^que acessear o site https://www\\.shoestock\\.com\\.br/$")
	public void queAcessearOSiteHttpsWwwShoestockComBr() throws Throwable {
		storePage.navigate("https://www.shoestock.com.br/");
	}
	

	
	@When("^digitar o nome do produto no \"([^\"]*)\"$")
	public void digitarONomeDoProdutoNo(String arg1) throws Throwable {
		Thread.sleep(1500);
		storePage.inputText("search-input", "tenis");
	}

	@When("^apertar o botao \"([^\"]*)\"$")
	public void apertarObotao(String arg1) throws Throwable {
		storePage.insertKey(Keys.ENTER, "search-input" );
	}

	@Then("^sera apresentado os resultados referentes ao produto pesquisado$")
	public void seraApresentadoOsResultadosReferentesAoProdutoPesquisado() throws Throwable {
		storePage.textValidator("resultados de busca para","#content > section > section.search-list.search-list--3 > h1", 
				0, 24);
	}
	
	//
	

	@When("^clicar no produto desejado$")
	public void clicarNoProdutoDesejado() throws Throwable {
	   storePage.click("#item-list > div.wrapper > div:nth-child(1)");
	}

	@When("^selecionar a numeracao desejada$")
	public void selecionarANumeracaoDesejada() throws Throwable {
	   storePage.click("#buy-box > section.product-size-selector > div > ul > li:nth-child(3) > a");
	}

	@When("^clicar em comprar$")
	public void clicarEmComprar() throws Throwable {
	   Thread.sleep(1000);
	   storePage.click("#buy-button-now");
	   produto = driver.findElement(By.cssSelector("#content > div:nth-child(3) > section > section.short-description > h1")).getText();
	   System.out.println(produto);
	}

	@Then("^sera apresentada a tela de pagamento$")
	public void seraApresentadaATelaDePagamento() throws Throwable {
	   storePage.textValidator("meu carrinho","body > div.main > div.cart.breakpoint.main > div.cart__items > h1",
			   0,12);
	}
	//
	@When("^ser apresentada a tela de pagamento$")
	public void serApresentadaATelaDePagamento() throws Throwable {
		storePage.textValidator("meu carrinho","body > div.main > div.cart.breakpoint.main > div.cart__items > h1",
				   0,12);
	}

	@Then("^o produto selecionado devera estar no carrinho$")
	public void oProdutoSelecionadoDeveraEstarNoCarrinho() throws Throwable {
	    storePage.textValidator(produto.substring(0,22).toLowerCase(), "body > div.main > div.cart.breakpoint.main > div.cart__items > div.product-items > div > div.product-item__details > div > div > h3", 
	    		0, 22);
	}


}	
