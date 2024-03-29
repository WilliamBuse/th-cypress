class settingsPage  {

fillPassword(value) {
    cy.get(`[name=currentPassword]`);
    //field.clear();
    field.type(value,{ force: true })
    
    return this;
  }

fillNewPassword(value) {
    const field = cy.get(`[name=password]`);
    //field.clear();
    field.type(value);
    
    return this;
  }

fillConfirmPassword(value) {
    const field = cy.get(`[name=passwordConfirmation]`);
    field.clear();
    field.type(value);
    
    return this;
  }

  updatePassword() {
    cy.contains('Update Password').click();
  }
}

export default settingsPage;

