class homePage {
  elements = {
    pollQuestionInput: () => cy.get("#poll-question"),
    pollOption: (position) => cy.get('[name="option_' + position + '"]'),
    createPollButton: () => cy.get('[name="submit"]'),
    errorMessage: () => cy.get('.error > li'),
    addOptionButton: () => cy.get('#add-options'),
    pollInputList: () => cy.get('.options-container > .poll-input'),
    languageButton: () => cy.get('.lang-picker'),
    languageList: () => cy.get('#lang-menu > li'),
    languageSelection: (position) => cy.get('#lang-menu > li:nth-child(' + position + ')'),
    welcomeToTitle: () => cy.get('.hero-text > span'),
    siteDescription: () => cy.get('.hero-text > p'),
    questionFieldLabel: () => cy.get('.input-group > label'),
    optionsFieldLabel: () => cy.get('.options > label'),
    popularPollsSection: () => cy.get('.section-body'),
    popularPollsList: () => cy.get('.section-body > a'),
    footerSection: () => cy.get('footer > .container'),
    footerTerm: () => cy.get('body > footer > div > div.top-footer > nav > a:nth-child(2)'),
    footerBlog: () => cy.get('body > footer > div > div.top-footer > nav > a:nth-child(3)'),
    footerContact: () => cy.get('body > footer > div > div.top-footer > nav > a:nth-child(4)'),
    twitterButton: () => cy.get('body > footer > div > div.top-footer > div > a.sm-btn.twitter'),
    linkedinButton: () => cy.get('body > footer > div > div.top-footer > div > a.sm-btn.linkiden'),
    cookiePopup: () => cy.get('.cookie-popup'),
    closeCookiesPopupButton: () => cy.get('#close-cookie > ion-icon')
  };

  typeQuestion(question) {
    this.elements.pollQuestionInput().type(question);
  };

  typePollOption(position, option) {
    this.elements.pollOption(position).type(option, { force: true });
  };

  clickCreatePollButton() {
    this.elements.createPollButton().click();
  };

  clickaddOptionButton(number) {
    let i = 0;
    while (i < number) {
      this.elements.addOptionButton(number).click();
      i++;
    }
  };

  clickLanguageButton() {
    this.elements.languageButton().click();
  }

  selectLanguage(position) {
    this.elements.languageSelection(position).click();
  }

  clickFooterTermLink() {
    this.elements.footerTerm().click();
  }

  clickFooterBlogLink() {
    this.elements.footerBlog().click();
  }

  clickFooterContactLink() {
    this.elements.footerContact().click();
  }

  clickTwitterButton() {
    this.elements.twitterButton().click();
  }

  clickLinkedinButton() {
    this.elements.linkedinButton().click();
  }

  clickCloseCookiesPopupButton() {
    this.elements.closeCookiesPopupButton().click();
  }
}

module.exports = new homePage();
