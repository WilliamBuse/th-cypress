    //import constants from '../common/constants';
    //import params from '../common/params';
import mainPage from '../pageObjects/mainPage';
import settingsPage from '../pageObjects/settingsPage';

//Set prBranch for URLs if needed.
//If the PR required api changes, then the web app will point to a special api branch.
//Otherwise, it points to the normal staging api url.
//const prBranch = '-pr-1986';//'-pr-1689';
//const prBranchApi = '-pr-2949';//'-pr-2491';
const prBranch = '';//'-pr-1689';
const prBranchApi = '';//'-pr-2491';   
const waitForEmailSecs = 60;  //set to 20 for staging, 40 or 60 for PRsPPPPPPPP
const userName = 'Regeena Massa';
const user = 'thregression.htcoikvm@mailosaur.io';
const password = 'Testing123!';
        //userId = '28432',
        //profileErrorMsg = 'An error occurred when trying to update your profile.',
        //passwordErrorMsg = 'An error occurred when trying to update your password.',
        //profileSuccessMsg = 'Profile updated successfully.',
        //passwordSuccessMsg = 'Password updated successfully.',
        //preferencesSuccessMsg = 'Preferences updated successfully.',
        //passwordsMustMatchMsg = 'Passwords must match';

describe('Sign In', () => {
  it('should sign in with correct credentials', () => {
    const main = new mainPage();
    main.launchPage('https://th-web-staging' + prBranch + '.herokuapp.com/login');

    main.doLogin(user, password);
  });

  it('should switch accounts ', () => {
    const main = new mainPage();
    main.selectSwitchAccountsOption('TravelMax');

    //const settings = main.selectUserDropdownOptionByUsername('User Settings', userName);


  //});

  //it('should return an error with new passwords not matching', () => {
    //const settings = new settingsPage();

    //settings.fillPassword(password);


  });
});
