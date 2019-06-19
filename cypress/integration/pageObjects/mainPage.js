import settingsPage from './settingsPage';

class mainPage {

launchPage(url){
    cy.visit(url), { timeout: 30000 };
}


doLogin(email, password){
    console.log('Login Email: ' + email);
    console.log('Login password: ' + password);

    const field = cy.get(`[name=email]`);
    field.clear();
    field.type(email);

    const field2 = cy.get(`[name=password]`);
    field2.clear();
    field2.type(password);

    cy.contains('Sign In').click();
    
    return this;
  }


selectSwitchAccountsOption(value) {
    cy.contains('Switch Accounts').click();
    cy.contains(value).click();

    return this;
    }

selectUserDropdownOptionByUsername(option, userName){
    cy.contains(userName).click({ force: true });
    cy.contains(option).click({ force: true });

    const settings = new settingsPage();
    return settings;
    }


}

export default mainPage;