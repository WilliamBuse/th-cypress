require('dotenv').config();

// *** This configuration is for production only! ***

const waitForEmailSecs = 20;

const Params  = {
    url: {
        site: 'https://www.travelershaven.com/login',
        corporate: 'https://www.travelershaven.com/',
        explorer: 'https://www.travelershaven.com/explorer',
        iss: 'https://www.travelershaven.com/iss-leads',
        admin: 'https://api.travelershaven.com/',
        consumerSearch: 'https://www.myhavn.com/'
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
        thpAdmin: 'autoadmin1' + '.' + process.env.MAILOSAUR_SERVER_ID + '@mailosaur.io',
        thpPassword: process.env.THP_PASSWORD + 'Prod',
        emailDomain: '.' + process.env.MAILOSAUR_SERVER_ID + '@mailosaur.io',
        clientName: '',
        isLeadUpgrade: false
    },
    waitForEmailSecs: waitForEmailSecs
};
const AllScriptsTimeout = 120000;
const GetPageTimeout= 120000;
const JasmineNodeTimeoutInterval = 2500000;
const Framework = 'jasmine2';

exports.params = Params;
exports.allScriptsTimeout = AllScriptsTimeout;
exports.getPageTimeout = GetPageTimeout;
exports.jasmineNodeTimeoutInterval = JasmineNodeTimeoutInterval;
exports.framework = Framework;

