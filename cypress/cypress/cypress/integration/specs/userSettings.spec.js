/// <reference types="Cypress" />

    import constants from '../common/constants';
    import params from '../common/params';
    import mainPage from '../pageObjects/mainPage';
    import settingsPage from '../pageObjects/settingsPage';

        userName = constants.users.regeenaAdminName,
        user = constants.users.regeenaAdmin,
        password = constants.users.password,
        userId = '28432',
        profileErrorMsg = 'An error occurred when trying to update your profile.',
        passwordErrorMsg = 'An error occurred when trying to update your password.',
        profileSuccessMsg = 'Profile updated successfully.',
        passwordSuccessMsg = 'Password updated successfully.',
        preferencesSuccessMsg = 'Preferences updated successfully.',
        passwordsMustMatchMsg = 'Passwords must match';

describe('Sign In', () => {
  it('should sign in with correct credentials', () => {
    const main = new MainPage();
    main.launchPage(url)



  });
});