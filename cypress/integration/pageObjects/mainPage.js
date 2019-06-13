class mainPage {

launchPage(url){
    cy.visit(url), { timeout: 30000 };
    cy.url().should('eq', url);
}


doLogin(email, password){
    console.log('Login Email: ' + email);
    console.log('Login password: ' + password);

    cy.contains('Sign In').click()
    const field = cy.get(`[name=email]`);
    field.clear();
    field.type(email);

    const field2 = cy.get(`[name=email]`);
    field2.clear();
    field2.type(password);

    cy.contains('Sign In').click();
    
    return this;
  }


selectSwitchAccountsOption(value) {
    cy.contains('Switch Accounts').click();
    cy.contains(value).click();

    Return this;
    }

selectUserDropdownOptionByUsername(option, userName){
    cy.contains(userName).click();
    cy.contains(option).click();

    Return this;
    }


}

export default mainPage;