//Set prBranch for URLs if needed.
//If the PR required api changes, then the web app will point to a special api branch.
//Otherwise, it points to the normal staging api url.
//const prBranch = '-pr-1986';//'-pr-1689';
//const prBranchApi = '-pr-2949';//'-pr-2491';
const prBranch = '';//'-pr-1689';
const prBranchApi = '';//'-pr-2491';   
const waitForEmailSecs = 60;  //set to 20 for staging, 40 or 60 for PRs

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
        thpAdmin: 'thregression' + '.' + process.env.MAILOSAUR_SERVER_ID + '@mailosaur.io',
        thpPassword: process.env.THP_PASSWORD,
        emailDomain: '.' + process.env.MAILOSAUR_SERVER_ID + '@mailosaur.io',
        clientName: '',
        isLeadUpgrade: false
    },
    waitForEmailSecs: waitForEmailSecs
};
const AllScriptsTimeout = 500000;
const GetPageTimeout= 500000;
const JasmineNodeTimeoutInterval = 5000000;
const Framework = 'jasmine2';

exports.params = Params;
exports.allScriptsTimeout = AllScriptsTimeout;
exports.getPageTimeout = GetPageTimeout;
exports.jasmineNodeTimeoutInterval = JasmineNodeTimeoutInterval;
exports.framework = Framework;

