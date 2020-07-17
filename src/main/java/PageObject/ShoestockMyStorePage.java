package PageObject;


import static org.junit.Assert.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ShoestockMyStorePage {
	WebDriver driver;
	
	public ShoestockMyStorePage(WebDriver driver) {
		this.driver = driver;
	}
    public void navigate(String url) {
    	driver.get(url);
    }
    //É utilizado para esperar um elemento na tela até que o mesmo esteja visível
    public void waitPresenceElement(String element, String type) {
    	WebDriverWait wait = new WebDriverWait(driver, 12);
    	if(type.equals("id")) {
    		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(element)));
    	}else {
    		wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(element)));
    	}
    		
    	
    }
    public void insertKey(CharSequence key, String element) {
    	driver.findElement(By.id(element)).sendKeys(key);

    }
	public void click(String element) {
		waitPresenceElement(element, "css");
		driver.findElement(By.cssSelector(element)).click();
		
		
	}
	public void inputText(String element, String produto) {
		waitPresenceElement(element, "id");
		driver.findElement(By.id(element)).sendKeys(produto);
	}
	//Para ter mais flexibilidade este método permite passar uma string fragmentada, permitindo a validação de uma parte dela
	public void textValidator(String text, String element, int ini, int fim) {
		waitPresenceElement(element, "css");
		String titulo = driver.findElement(By.cssSelector(element)).getText();
		assertEquals(text, titulo.substring(ini, fim).toLowerCase());
		
	}
	
}
