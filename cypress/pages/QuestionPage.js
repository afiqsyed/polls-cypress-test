class questionPage {
  elements = {
    answerTitle: () => cy.get(".form-header > .overlay > h1"),
    optionList: (position) => cy.get('.form-container > ul > li:nth-child(' + position + ') > .title'),
    answerCheckbox: (position) => cy.get('body > section > section > div.container > div.form-container > form > div:nth-child(' + position + ') > div'),
    voteButton: () => cy.get('.form-container > .controls > a.btn.blue'),
    answerSelection: () => cy.get('.input-group'),
    submitButton: () => cy.get('.form-controls > input.btn.blue'),
    percentage: () => cy.get('.pourcentage'),
    optionBar: () => cy.get('.bar'),
    backButton: () => cy.get('div.container > div.form-container > div > a.btn.white'),
    viewResultButton: () => cy.get('div.container > div.form-container > form > div.form-controls > a'),
    shareButton: () => cy.get('.share-button'),
    copyLinkSelection: () => cy.get('.share-menu .copy'),
    copyEmbedCodeSelection: () => cy.get('#copy-embed'),
    copyEmbedPopUp: () => cy.get('.link-copy-modal > .link-container'),
    copyEmbedLink: () => cy.get('#modal-copy-input'),
    copiedUrl: () => cy.get('#copy-button > div.copy-link > small'),
    copiedBanner: () => cy.get('.linkCopied'),
    shareFacebook: () => cy.get('body > section > section > div.container > div.form-container > header > div > div > ul > li:nth-child(4)'),
    shareTwitter: () => cy.get('body > section > section > div.container > div.form-container > header > div > div > ul > li:nth-child(5)'),
    shareLinkedin: () => cy.get('body > section > section > div.container > div.form-container > header > div > div > ul > li:nth-child(6)'),
    answerNameList: () => cy.get('body > section > section > div.container > div.form-container > ul > li > span.title'),
    answerPercentage:(position) => cy.get('body > section > section > div.container > div.form-container > ul > li:nth-child('+ position +') > span.pourcentage')
  };

  clickVoteButton() {
    this.elements.voteButton().click();
  }

  clickAnswerCheckbox(index) {
    cy.get('.input-group > .checkmark').eq(index).click();
  }

  clickSubmitButton() {
    this.elements.submitButton().click();
  }

  clickBackButton() {
    this.elements.backButton().click();
  }

  clickViewResultButton() {
    this.elements.viewResultButton().click();
  }

  clickShareButton() {
    this.elements.shareButton().click();
  }

  clickCopyLinkSelection() {
    this.elements.copyLinkSelection().click();
  }

  clickCopyEmbedCode() {
    this.elements.copyEmbedCodeSelection().click();
  }

  clickShareFacebook() {
    this.elements.shareFacebook().click();
  }

  clickShareTwitter() {
    this.elements.shareTwitter().click();
  }

  clickShareOnLinkedin() {
    this.elements.shareLinkedin().click();
  }


}

module.exports = new questionPage();
