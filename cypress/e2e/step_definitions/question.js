import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const homePage = require("../../pages/HomePage");
const questionPage = require("../../pages/QuestionPage");

let url;
let iteration = 0;

Given("Polls question is created", () => {
  let i = 0;
  while (i < 1) {
    cy.log("Iteration Number" + iteration)
    if (iteration == 0) {
      cy.viewport('macbook-15');
      cy.visit("/");
      homePage.typeQuestion('Sample Question For Question Page Test');
      homePage.clickaddOptionButton(2);
      homePage.typePollOption(1, 'Sample Option 1');
      homePage.typePollOption(2, 'Sample Option 2');
      homePage.typePollOption(3, 'Sample Option 3');
      homePage.typePollOption(4, 'Sample Option 4');
      homePage.typePollOption(5, 'Sample Option 5');
    
      cy.wait(11000);
      homePage.clickCreatePollButton({force: true});
    
      cy.url().then(getUrl => {
        url = getUrl;
        cy.log('Current URL is : '+url);
      });
    
      cy.log(url);
      iteration++;
      cy.log("Iteration Number" + iteration)
    }
    i++;
  }
});

Given("User opens the Polls.io Question Page", () => {
  cy.viewport('macbook-15');
  cy.visit(url);
  homePage.clickCloseCookiesPopupButton();
  cy.waitUntil(function() {
    return homePage.elements.cookiePopup().should('not.be.visible');
  });
});

And("User click {string} from the option list checkbox", (optionName) => {
  questionPage.elements.answerSelection().each(($ele, index) => {
    if ($ele.text().includes(optionName)) {
      questionPage.clickAnswerCheckbox(index);
    }
  });
});


And("{string} checkbox will be unchecked", (optionName) => {
  questionPage.elements.answerSelection().each(($ele, index) => {
    if ($ele.text().includes(optionName)) {
      questionPage.elements.answerCheckbox(index + 1).should('not.be.checked');
    }
  });
});

And("{string} checkbox will be checked", (optionName) => {
  questionPage.elements.answerSelection().each(($ele, index) => {
    if ($ele.text().includes(optionName)) {
      questionPage.elements.answerCheckbox(index + 1).should('not.be.checked');
    }
  });
});

Then("Poll page will displayed with the question and 2 options", (table) => {
  table.hashes().forEach((row) => {
    questionPage.elements.answerTitle().should("have.text", row.question);
    questionPage.elements.optionList(1).should("have.text", row.option1);
    questionPage.elements.optionList(2).should("have.text", row.option2);
  });
});

Then("Poll page will displayed with the question and 5 options", (table) => {
  table.hashes().forEach((row) => {
    questionPage.elements.answerTitle().should("have.text", row.question);
    questionPage.elements.optionList(1).should("have.text", row.option1);
    questionPage.elements.optionList(2).should("have.text", row.option2);
    questionPage.elements.optionList(3).should("have.text", row.option3);
    questionPage.elements.optionList(4).should("have.text", row.option4);
    questionPage.elements.optionList(5).should("have.text", row.option5);
  });
});

When("User click vote on answer page", () => {
  questionPage.clickVoteButton();
});

And("Click submit button", () => {
  questionPage.clickSubmitButton();
});

Then("Result page will be displayed", () => {
  questionPage.elements.percentage().should("be.visible");
});

Then("Result page will be displayed with percentage updated", (table) => {
  table.hashes().forEach((row) => {
    questionPage.elements.answerNameList().each(($ele, index) => {
      if ($ele.text().includes(row.Options)) {
        questionPage.elements.answerPercentage(index + 1).should("have.text", row.Percentage);
      }
    });
  });
});

And("User click the back button", () => {
  questionPage.clickBackButton();
});

Then("User redirected back to home page", () => {
  cy.url().should('eq', 'https://polls.io/');
});

And("User click view result button", () => {
  questionPage.clickViewResultButton();
});

When("User click the share button", () => {
  questionPage.clickShareButton();
});

And("User click copy link and the link is correct", () => {
  questionPage.clickCopyLinkSelection();
  questionPage.elements.copiedUrl().should("have.text", url);
});

And("User click copy embed code", () => {
  questionPage.clickCopyEmbedCode();
});

And("User click share to Facebook", () => {
  cy.window().then(win => {
    cy.stub(win, 'open').as('Open')
  })

  questionPage.clickShareFacebook();
});

And("User click share to Twitter", () => {
  cy.window().then(win => {
    cy.stub(win, 'open').as('Open')
  })

  questionPage.clickShareTwitter();
});

And("User click share to Linkedin", () => {
  cy.window().then(win => {
    cy.stub(win, 'open').as('Open')
  })

  questionPage.clickShareOnLinkedin();
});

Then("New windows with correct Facebook URL is open", () => {
  cy.window().its('open').should('be.calledWith', 'https://www.facebook.com/sharer/sharer.php?u=' + url.replace('https', 'http'));
});

Then("New windows with correct Twitter URL is open", () => {
  cy.window().its('open').should('be.calledWith', 'https://www.twitter.com/share?url=' + url.replace('https', 'http'));
});

Then("New windows with correct Linkedin URL is open", () => {
  cy.window().its('open').should('be.calledWith', 'https://www.linkedin.com/sharing/share-offsite/?url=' + url.replace('https', 'http'));
});

Then("Copied to clipboard banner displayed", () => {
  if (Cypress.isBrowser('chrome')) {
    questionPage.elements.copyEmbedPopUp().should("be.visible");
    questionPage.elements.copyEmbedLink().should("contain.value", url)
  }

  if (Cypress.isBrowser('electron')) {
    questionPage.elements.copiedBanner().should("be.visible");
  }
});

Then("Embed code popup will be displayed with correct embed code", () => {
  questionPage.elements.copyEmbedPopUp().should("be.visible");
  questionPage.elements.copyEmbedLink().should("contain.value", url)
});

