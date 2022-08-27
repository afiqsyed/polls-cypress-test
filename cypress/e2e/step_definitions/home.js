import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const homePage = require("../../pages/HomePage");
const questionPage = require("../../pages/QuestionPage");

Given("A user opens the Polls.io website", () => {
  cy.viewport('macbook-15');
  cy.visit("/");
  homePage.clickCloseCookiesPopupButton();

  cy.waitUntil(function() {
    return homePage.elements.cookiePopup().should('not.be.visible');
  })
});

Given("A user opens the Polls.io website on {string}", (size) => {
  cy.viewport(size);
  cy.visit("/");
  homePage.clickCloseCookiesPopupButton();

  cy.waitUntil(function() {
    return homePage.elements.cookiePopup().should('not.be.visible');
  });
});

When("User enters the poll question {string}", (question) => {
  homePage.typeQuestion(question);
});

And("User fill up the poll options", (table) => {
  table.hashes().forEach((row) => {
    homePage.typePollOption(row.position, row.name);
  });
});

And("A user clicks on the Create this poll button", () => {
  cy.wait(13000);
  homePage.clickCreatePollButton({force: true});
});

And("A user clicks on the Create this poll button without waiting 10 seconds", () => {
  homePage.clickCreatePollButton({force: true});
});

Then("Error messages {string} is displayed", (errorMessage) => {
  homePage.elements.errorMessage().should("have.text", errorMessage)
});

When("User click add another option button for {int} times", (number) =>{
  homePage.clickaddOptionButton(number);
});

Then("{int} New option fields is added from initial 3", (number) => {
  let initialField = 3;
  totalField = initialField + number;
  homePage.elements.pollInputList().should("have.length", totalField);
});

When("User click language button", () => {
  homePage.clickLanguageButton();
});

And("User select {string}", (language) => {
  homePage.elements.languageList().each(($ele, index) => {
    if ($ele.text().includes(language)) {
      homePage.selectLanguage(index + 1);
    }
  });
});

Then("the page is translated to Deutsch", (table) => {
  table.hashes().forEach((row) => {
    homePage.elements.welcomeToTitle().should('contain.text', row.Welcometo);
    homePage.elements.siteDescription().should("contain.text", row.SiteDescription);
    homePage.elements.questionFieldLabel().should("contain.text", row.QuestionLabel);
    homePage.elements.optionsFieldLabel().should("contain.text", row.OptionLabel);
    homePage.elements.createPollButton().should("have.value", row.CreatePollButton);
    homePage.elements.addOptionButton().should("contain.text", row.AddOptionButton);
  });
});

When("User navigate to popular polls Section", () => {
  homePage.elements.popularPollsSection().scrollIntoView().should('be.visible');
});

Then("The section display correctly with {int} popular polls", (number) => {
  homePage.elements.popularPollsList().should("have.length", number);
});

When("User click on the first popular polls", () => {
  homePage.elements.popularPollsList().first().click();

  cy.on("url:changed", (newUrl) => {
    expect(newUrl).to.contain("/vote")
  });
});

Then("User are navigated to the poll page", () => {
  questionPage.elements.answerTitle().should('be.visible');
});

When("User click term hyperlink at the footer section", () => {
  homePage.elements.footerSection().scrollIntoView().should('be.visible');
  homePage.clickFooterTermLink();
});

Then("User is navigated to Terms and Condition page", () => {
  cy.url().should('include', '/terms')
});

When("User click blog hyperlink at the footer section", () => {
  homePage.elements.footerSection().scrollIntoView().should('be.visible');
  homePage.clickFooterBlogLink();
});

Then("User is navigated to Blog page", () => {
  cy.url().should('include', '/blog/')
});

When("User click contact hyperlink at the footer section", () => {
  homePage.elements.footerSection().scrollIntoView().should('be.visible');
  homePage.clickFooterContactLink();
});

Then("User is navigated to Contact Us page", () => {
  cy.url().should('include', '/blog/contact-us/')
});

When("User click Follow Us On Twitter at the footer section", () => {
  homePage.elements.footerSection().scrollIntoView().should('be.visible');
  homePage.clickTwitterButton();
});

Then("User is navigated to Poll IO Twitter page", () => {
  cy.url().should('eq', 'https://twitter.com/pollsio')
});

When("User click Follow Us On Linkedin at the footer section", () => {
  homePage.elements.footerSection().scrollIntoView().should('be.visible');
  homePage.clickLinkedinButton();
});

Then("User is navigated to Poll IO Linkedin page", () => {
  cy.url().should('eq', 'https://www.linkedin.com/company/polls')
});