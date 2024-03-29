class Params {

//Set prBranch for URLs if needed.
//If the PR required api changes, then the web app will point to a special api branch.
//Otherwise, it points to the normal staging api url.
//const prBranch = '-pr-1986';//'-pr-1689';
//const prBranchApi = '-pr-2949';//'-pr-2491';
const prBranch = '';//'-pr-1689';
const prBranchApi = '';//'-pr-2491';   
const waitForEmailSecs = 60;  //set to 20 for staging, 40 or 60 for PRsPPPPPPPP

const Params  = {
    url: {
        site: 'https://th-web-staging' + prBranch + '.herokuapp.com/login',
        corporate: 'https://th-web-staging' + prBranch + '.herokuapp.com/',
        explorer: 'https://th-web-staging' + prBranch + '.herokuapp.com/explorer',
        iss: 'https://th-web-staging' + prBranch + '.herokuapp.com/iss-leads',
        admin: 'https://th-portal-staging' + prBranchApi + '.herokuapp.com/',
        consumerSearch: 'https://develop--naughty-goldwasser-4901d9.netlify.com/'
    },
    inputFiles: {
        housingOrder: '',
        buildALease: '',
        option: '',
        clientAccount: '',
        inviteCoWorker: ''
    },
    sharedVars: {
        occupantName: '',
        occupantEmail: '',
        leaseStartDate: '',
        leaseEndDate: '',
        propertyId: '',
        //thpAdmin: 'thregression' + '.' + process.env.MAILOSAUR_SERVER_ID + '@mailosaur.io',
        thpAdmin: 'thregression.htcoikvm@mailosaur.io',
        //thpPassword: process.env.THP_PASSWORD,
        thpPassword: 'Testing123!',
        //emailDomain: '.' + process.env.MAILOSAUR_SERVER_ID + '@mailosaur.io',
        emailDomain: '.htcoikvm@mailosaur.io',
        clientName: '',
        isLeadUpgrade: false
    },
    waitForEmailSecs: waitForEmailSecs
};
}
export default Params;

