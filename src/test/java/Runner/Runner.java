package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
				 features = {"src/test/java/features/"},
				 plugin = {"pretty", "html:target/cucumber"},
				 tags = {"@geral"},
				 snippets = SnippetType.CAMELCASE, monochrome = true, dryRun = false, strict = false,
				 glue = {""})
				 
public class Runner{
}