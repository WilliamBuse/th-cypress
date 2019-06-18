/* WEBSITE CONSTANTS */

    import Params from './params.js';
class constants {
var URLs = {
    prodURL: 'https://www.travelershaven.com/',
    dashboard: '/dashboard',
    housingOrders: '/orders',
    searchExplorer: '/explorer',
    openRequests: '/orders?open=true',
    openServiceTickets: '/service-tickets?open=true',
    ntvsDue: '/leases?ntvDue=true',
    backgroundsNeeded: '/leases?bgChecks=true',
    trends: '/trends',
    users: '/users',
    join: '/join',
    client: '/client',
    privacyPolicy: '/privacy',
    activities: 'v2/activities',
    orderApartment: 'order/apartment',
    buildALease: 'v2/leases/add',
    newPropertyAccount: '/v2/accounts/new',
    newHousingRequest: '/v2/requests/new', //'/order/new',
    lease: '/lease/',
    leases: '/leases',
    editPropertyAccount: '/v2/accounts/edit',
    adminSignIn: 'user/sign_in',
    housingOrder: '/v2/orders/',
    amnDashboard: '/v2/dashboard',
    options: '/v2/options',
    publicOption: '/v2/options/',
    v2Accounts: '/v2/accounts',
    leads: '/th-leads',
    units: '/unit-listings',
    accounts: '/client-accounts',
    propertyActivation: '/property-approve',
    mailinator: 'https://www.mailinator.com/v2/inbox.jsp?zone=public&query=',
    yopmail: 'http://www.yopmail.com/en/',
    cookiePolicy: '/privacy#cookies',
    vendorInvitation: '/furniture-vendor-invitation',
    priceSheets: '/price-sheets',
    priceSheetsNew: '/price-sheets/new',
    priceSheetsEdit: '/price-sheets/edit/',
    priceSheetsWalkthrough: '/price-sheets/walkthrough',
    furnitureMarkets: '/furniture-markets',
    furnitureMarketsNew: '/furniture-markets/new',
    furnitureMarketsEdit: '/furniture-markets/edit',
    inventoryPhotos: '/inventory-photos',
    furnitureUsers: '/furniture-users',
    furnitureCoworkerActivate: '/user/invitation/accept/',
    clientEdit: '/client-accounts/edit/',
    explorerRequestHousing: '/explorer/request-housing',
    login: '/login',
    affiliate: '/affiliate',
    backgroundCheck: '/background-check/',
    consumerResults: 'search',
    reserve: 'reserve',
    uploadBGCheck: '/client-background-check/',
    hotelOrders: '/hotels/orders',
    serviceTickets: '/service-tickets',
    thSupplierNetwork: '/supplier-network',
    reports: '/reports/index',
    budgetGuide: '/budget-guide',
    invoices: '/billing',
    payments: '/netsuite-invoice-payment',
    vacancies: '/vacancies',
    referralInquiries: '/referrals/inquiries',
    referralLeases: '/referrals/leases',
    businessesAnalytics: '/businesses-analytics',
    pmcs: '/pmcs',
    properties: '/properties',
    postProperty: '/post-property',
    affiliateRegister: '/affiliate-register/',
    reportsSales:'/reports/sales',
    reportsOptions:'internal.travelershaven.com/options-dashboard',
    reportsIndustry:'internal.travelershaven.com/industry-dashboard',
    reportsGHA:'/reports/gha',
    billing: '/billing',
    relocationCoordinators: '/relocation-coordinators',
    transferees: '/transferees',
    clients: '/referrals/clients',
    affiliateHousingOrder: '/v2/affiliate/orders',
    affiliateNetwork: '/affiliate-partners',
    hotels: '/hotels'
};

var SidebarOptions = {
    dashboard: 'Dashboard',
    housingOrders: 'Housing Orders',
    activities: 'Pilot Activities',
    leases: 'Leases',
    amnDashboard: 'Pilot Dashboard',
    options: 'Options',
    v2Accounts: 'Pilot Accounts',
    serviceTickets: 'Service Tickets',
    users: 'Users',
    leads: 'Leads',
    units: 'Units',
    accounts: 'Clients',
    propertyActivation: 'Property Activation',
    inviteVendor: 'Invite Vendor',
    markets: 'Markets',
    priceSheets: 'Price Sheets',
    inventoryPhotos: 'Inventory Photos',
    leaveReview: 'Click here',
    hotelOrders: 'Hotel Orders',
    thSupplierNetwork: 'TH Supplier Network',
    trends: 'Trends',
    reports: 'Reports',
    budgetGuide: 'Budget Guide',
    invoices: 'Billing',
    payments: 'Payments',
    vacancies: 'Vacancies',
    referralInquiries: 'Referral Inquiries',
    referralLeases: 'Referral Leases',
    analytics: 'Analytics',
    pmcs: 'PMCs',
    properties: 'Properties',
    postProperty: 'List Property',
    suppliers: 'Supplier Network',
    billing: 'Billing',
    relocationCoordinators: 'Relocation Coordinators',
    transferees: 'Transferees',
    clients: 'Clients',
    furnitureMarket: 'Markets',
    hotels: 'Hotels'
};

var PageHeaders = {
    companyDashboard: 'Company Dashboard',
    inviteCoworker: 'Invite a Coworker',
    searchExplorer: 'Search short-term rentals, nationwide.',
    inviteTraveler: 'Invite a Traveler',
    activities: 'Activities',
    addActivity: 'Add Activity',
    inviteVendor: 'Invite a Furniture Vendor',
    ghaWelcome: 'Welcome to the Global Housing Alliance',
    priceSheets: 'Price Sheets',
    priceSheetPrefill: 'Option to Prefill',
    walkthroughList: 'Move-In Walkthrough',
    areYouSure: 'Are You Sure?',
    markets: 'Markets',
    cannotDelete: 'Cannot Delete',
    inventoryPhotos: 'Inventory Photos',
    users: 'Users',
    userDetails: 'User Details',
    leaseApplication: 'Lease Application',
    creditCheck: 'Running Credit Check',
    existingClient: 'Existing Client',
    upgradeLead: 'Upgrade Lead to Order',
    addNewClient: 'Add a New Client',
    createAccount: 'Create Account',
    createAnAccount: 'Sign up here',
    sendBGEmail: 'Send Background Email',
    leaveReview: 'How are we doing?',
    inviteSupplier: 'Request a Supplier'

};

var SectionHeaders = {
    activeLeases: 'Active Leases',
    upcomingMoveIns: 'Upcoming Move-Ins',
    upcomingMoveOuts: 'Upcoming Move-Outs',
    activity: 'Activity',
    sixMonthStat: '6-Month Stats',
    users: 'Users',
    criteria: 'Criteria',
    property: 'Property',
    details: 'Details',
    linkedActivity: 'Linked Activity',
    gettingStarted: 'Getting Started',
    leaseDetails: 'Lease Details',
    tenantInfo: 'Tenant Information',
    currentAddress: 'Current Address'
};

var TableHeaders = {
    moveName: 'Name',
    moveLocation: 'City, State',
    moveDate: 'Date',
    activityPlacementId: 'Placement ID',
    activityStatus: 'Status',
    activityDueDate: 'Due Date',
    activityType: 'Type',
    activityVendor: 'Vendor',
    activityCandidate: 'Candidate',
    amnMoveName: 'Candidate',
    amnMoveLocation: 'City/State',
    amnMoveInDate: 'Move-In',
    amnMoveOutDate: 'Move-Out',
};

var Labels = {
    inviteStipendTravelers: 'Invite Stipend Travelers',
    inviteStipendTravelersInst: 'Invite your stipend travelers to join TH Direct with your own company sign up page.',
    inviteStipendTravelersLearnMoreHeader: 'With Travelers Haven Direct, stipend & self-serve travelers will ' +
    'be able to find exactly what they\'re looking for in minutes.',
    inviteStipendTravelersPoint1: '60K+ short-term properties across North America',
    inviteStipendTravelersPoint2: 'Filter by budget, proximity, pets, & more',
    inviteStipendTravelersPoint3: 'Options available to customize their unit',
    inviteStipendTravelersPoint4: 'All leases can be completed electronically',
    inviteStipendTravelersPoint5: 'Our expert customer support team is here 24/7',
    inviteStipendTravelersPoint6: 'Save up to 24% with our exclusive rates and partner network',
    inviteStipendTravelersPoint7: 'Make an informed decision with reviews, walk scores, & more',
    inviteStipendTravelersPoint8: 'If you need assistance, we have experienced account managers available',
    inviteStipendTravelersFooter: 'Travelers Haven Direct is a free service, created to better serve our customers & their travelers.',
    searchExplorerInst: 'Find your next apartment in minutes or call a concierge at ',
    activeLeasesApartments: 'Apartment',
    activeLeasesHotels: 'Hotel',
    activeLeasesADR: 'ADR',
    activeUnits: 'Active Units',
    openRequests: 'Open Requests',
    openServiceTickets: 'Open Service Tickets',
    ntvsDue: 'NTV\'s Due',
    backgroundsNeeded: 'Backgrounds Needed',
    moveIns: 'Move-Ins',
    avgCashFlow: 'Avg. Cash Flow',
    vacancySavings: 'Vacancy Savings',
    admins: "Admins",
    coordinators: 'Coordinators',
    recruiters: 'Recruiters',
    travelers: 'Travelers',
    filterByType: 'Filter by type',
    serviceWindow: 'Service Window',
    completedBy: 'Completed By',
    notes: 'Notes',
    tbd: 'TBD',
    activityReopened: 'Activity reopened.',
    activityCompleted: 'Activity completed.',
    activityClosed: 'Activity Closed.',
    activityPermissionToEnter: ' and Permission to Enter Sent',
    leasePermissionToEnter: ' has permission to enter the unit on',
    accountNum: 'Account #',
    spokeTo: 'Spoke To',
    serviceStart: 'Service Start',
    serviceEnd: 'Service End',
    packageLevel: 'Package Level',
    activitiesDue: 'Activities Due',
    backgroundsNeeded: 'Backgrounds Needed',
    administrator: 'Administrator',
    hae: 'HAE',
    candidate: 'Candidate',
    privacyBanner: 'This site tracks visits anonymously using cookies. ' +
    'You can find out more and opt-out from the specific cookies we use in our cookie policy. ' +
    'By closing this banner, clicking a link, or continuing to browse, you agree to the use of cookies.',
    inviteVendorInstructions: 'This will send an invitation email to the vendor',
    ghaCreateAcctInstructions: 'To get your company started, simply complete the form. ' +
    'Once completed, you can enter pricing, designate markets, upload inventory photos, and invite your team members.',
    questions: 'Questions? Contact us:',
    ghaFurnitureContact: 'furniture@travelershaven.com',
    ghaCreateAcctInstructionsOne: 'Tell Us About Your Company...',
    ghaCreateAcctInstructionsTwo: 'Now Tell Us About You!',
    ghaCreateAcctServiceError: 'Please select at least one service to offer.',
    priceSheetPrefillInstructions: 'Select an existing price sheet if you\'d like to prefill this new sheet with its data.',
    priceSheetFurnInstructions1: 'Please fill out the pricing based on a 3-month term. Do not include tax!',
    priceSheetFurnInstructions2: 'Leave the price blank for items you don\'t offer.',
    priceSheetFurnInstructions3: 'Please enter the additional cost to upgrade to each item from a package\'s equivalent. Do not include tax!',
    priceSheetFurnInstructions4: 'Please enter the additional cost to add each item to a package. Do not include tax!',
    priceSheetTermAdj1: 'Do you add premiums for month-to-month terms?',
    priceSheetTermAdj2: 'Do you offer discounts for terms longer than 3 months?',
    tooltipArtSet: 'A set that includes one piece of art for each room: dining, living, and master. A mirror is an example of an appropriate piece for the dining room.',
    tooltipDecorSet: 'Candles and a glass decor bowl are examples of appropriate kit items.',
    tooltipWelcomeKit: 'A welcome kit is a pack of disposable items to tide travelers over as they settle into their new home.',
    tooltipWelcomeKitWtf: 'A welcome kit contains disposable items to tide travelers over as they settle into their new home.',
    tooltipPetPack: 'Includes a water bowl, a toy, a treat, and a bed.',
    tooltipCable: 'During a given install window, a representative will be present to help facilitate the install.',
    tooltipCableModem: 'Pick up and return cable/modem equipment. Must provide Travelers Haven with a return receipt.',
    tooltipWalkthrough: 'Complete Travelers Haven\'s move-in check list and photo requirements. The report will be submitted on the same business day that the service is provided.',
    tooltipLockbox: 'Obtain and deliver a lock box to a corporate apartment. Service includes checking keys into the lock box, providing a description of its location, and taking pictures of its code.',
    tooltipMaid: 'Refresh linens and clean unit to make ready for a new guest.',
    priceSheetConfirmDelete: 'Please confirm to delete price sheet',
    priceSheetDeleteFailMsg1: 'In order to delete this price sheet, it cannot be associated with any market.',
    priceSheetDeleteFailMsg2: 'Update each market\'s price sheet and try again.',
    ghaMarketConfirmDelete: 'Please confirm to delete market',
    tooltipMarketBillingId: 'If you have a unique number that you\'d like us to reference on accounting documents, please add it here.',
    tooltipMarketLocation: 'This address will be used to calculate delivery distance and fees.',
    marketStatusLabel: 'Ready to receive qualifying leads for this market? Select Active.\n' +
    'Otherwise, select Inactive.*',
    invPhotosInstructions: 'Please upload sample photos for each quality level and room. Add up to three sets per room.',
    furnitureCoworkerInstructions: 'A user associated with a market cannot be deleted.',
    creditCheck: 'This will only take a few seconds. Once approved, we will submit your application for our team to process.',
    creditCheckFail1: 'Oops.',
    creditCheckFail2: 'We need more information.',
    creditCheckFail3: 'Please contact us over the phone so that we move forward with your application.',
    creditCheckFail4: 'For help, please contact our team:',
    creditCheckFail5: '877.683.4359',
    creditCheckPass1: 'Congratulations!',
    creditCheckPass2: 'You have been approved.',
    creditCheckPass3: 'We have submitted your application to our team. Expect a response within 24 hours.',
    leaseAppInstr: 'Please fill out the application below. Once reviewed, one of our specialists will contact you. If you have any questions, please call us at (877) 683-4359.',
    leaseAppConsent1: 'By submitting this registration form, I understand that I am providing written instructions in ' +
    'accordance with the Fair Credit Reporting Act and other applicable law for Travelers Haven LLC to request and ' +
    'receive information about me from third parties, including but not limited to a copy of my consumer credit report ' +
    'and score from credit reporting agencies. I further authorize Travelers Haven to retain a copy of my information ' +
    'for use in accorance with Terms & Conditions & Privacy Policy.',
    leaseAppConsent2: 'I understand that the application fee is nonrefundable, regardless of approval or not.',
    sslCaption1: '100% Safe & Secure',
    sslCaption2: 'All credit card information is stored securely with SSL secure encryption.',
    supportPhoneNum: '(877) 592-9444',
    inviteSupplierModal: 'This will send an invitation email to the supplier',
    supplierRegWelcomeHdr: 'Welcome to the Global Housing Alliance',
    supplierRegWelcomeMsg: 'To get started, simply complete the form. Once completed you will be able to identify ' +
        'markets you wish to receive leads in. We will only send you qualified leads per your settings.',
    supplierRegWelcomeFtr1: 'Questions? Contact us:',
    supplierRegWelcomeFtr2: 'Alliance@travelershaven.com'
};

var Lists = {
    welcomeKitList1: [
        '1 Dishwasher Pack',
        '1 Laundry Detergent',
        '2 Dryer Sheets',
        '1 Paper Towel Roll',
        '1 Sponge',
        '2 Bottles of Water',
        '2 Snack (Chips/Cookies)',
        '1 Coffee Single-Use Setup',
        '1 Sealed Salt & Pepper Shakers/Grinders'
        ],
    welcomeKitList2: [
        '1 Toilet Paper Roll',
        '1 Hotel Size Shampoo',
        '1 Hotel Size Conditioner',
        '1 Hotel Size Lotion',
        '1 Hotel Size Hand Soap',
        '1 Hotel Size Bath Soap'
        ],
    furnReqEconomyLivingRm: [
        '1 Sofa',
        '1 Chair',
        '1 Cocktail Table',
        '1 End Table',
        '1 Table Lamp',
        '1 TV Stand'
    ],
    furnReqEconomyKitchen: [
        '1 Microwave'
    ],
    furnReqEconomyDiningRm: [
        '1 Dining Table',
        '4 Dining Chairs'
    ],
    furnReqEconomyMasterBedRm: [
        '1 Queen Bed',
        '1 Headboard',
        '1 Dresser',
        '1 Mirror',
        '1 Night Stand',
        '1 Table Lamp'
    ],
    furnReqEconomyAdditionalBedRm: [
        '1 Queen Bed',
        '1 Chest',
        '1 Night Stand',
        '1 Table Lamp'
    ],
    furnReqStandardLivingRm: [
    '1 Sofa',
    '1 Chair',
    '1 Cocktail Table',
    '2 End Tables',
    '2 Table Lamps',
    '1 TV Stand'
    ],
    furnReqStandardKitchen: [
    '1 Microwave'
    ],
    furnReqStandardDiningRm: [
    '1 Dining Table',
    '4 Dining Chairs'
    ],
    furnReqStandardMasterBedRm: [
    '1 Queen Pillow Top Bed',
    '1 Headboard',
    '1 Dresser',
    '1 Mirror',
    '2 Night Stands',
    '2 Table Lamps'
    ],
    furnReqStandardAdditionalBedRm: [
    '1 Queen Pillow Top Bed',
    '1 Chest',
    '1 Night Stand',
    '1 Table Lamp'
    ],
    furnHighlightStandardLivingRm: [
    '2 End Tables',
    '2 Table Lamps'
    ],
    furnHighlightStandardMasterBedRm: [
    '1 Queen Pillow Top Bed',
    '2 Night Stands',
    '2 Table Lamps'
    ],
    furnHighlightStandardAdditionalBedRm: [
    '1 Queen Pillow Top Bed'
    ],
    furnReqCorporateLivingRm: [
        '1 Sofa',
        '1 Chair or Love Seat',
        '1 Cocktail Table',
        '2 End Tables',
        '2 Table Lamps',
        '1 TV Stand',
        '1 42" Smart TV',
        '1 Artwork',
        '1 Rug',
        '1 Decor Kit'
    ],
    furnReqCorporateKitchen: [
        '1 Microwave'
    ],
    furnReqCorporateDiningRm: [
        '1 Dining Table',
        '4 Dining Chairs',
        '1 Artwork/Mirror'
    ],
    furnReqCorporateMasterBedRm: [
        '1 Queen Pillow Top Bed',
        '1 Headboard',
        '1 Dresser',
        '1 Mirror',
        '2 Night Stands',
        '2 Table Lamps',
        '1 32" TV',
        '1 Artwork'
    ],
    furnReqCorporateAdditionalBedRm: [
        '1 Queen Pillow Top Bed',
        '1 Chest',
        '1 Night Stand',
        '1 Table Lamp',
        '1 Artwork'
    ],
    furnHighlightCorporateLivingRm: [
        '1 Chair or Love Seat',
        '2 End Tables',
        '2 Table Lamps',
        '1 42" Smart TV',
        '1 Artwork',
        '1 Rug',
        '1 Decor Kit'
    ],
    furnHighlightCorporateDiningRm: [
        '1 Artwork/Mirror'
    ],
    furnHighlightCorporateMasterBedRm: [
        '1 Queen Pillow Top Bed',
        '2 Night Stands',
        '2 Table Lamps',
        '1 32" TV',
        '1 Artwork'
    ],
    furnHighlightCorporateAdditionalBedRm: [
        '1 Queen Pillow Top Bed',
        '1 Artwork'
    ],
    furnHighlightExecLivingRm: [
        '1 Chair or Love Seat',
        '2 End Tables',
        '2 Table Lamps',
        '1 42" Smart TV',
        '1 Artwork',
        '1 Rug',
        '1 Decor Kit'
    ],
    hwStandardKitchen: [
        '1 Baking/Casserole Dish',
        '1 Knife Set / Block',
        '1 Cutting Board',
        '1 Pizza Cutter',
        '1 Vegetable Peeler',
        '1 Ice Cream Scoop',
        '1 Can Opener',
        '1 Coffee Pot',
        '1 Cheese Grater',
        '1 Colander',
        '1 Cookware Set with a Teflon Skillet',
        '1 Corkscrew Bottle Opener',
        '2 Dish Cloths',
        '2 Dish Towels',
        '4 Dish Place Settings',
        '4 Beverage Glasses',
        '4 Wine Glasses',
        '4 Rocks Glasses',
        '4 Coffee Cups',
        '1 Juice Pitcher',
        '1 Measuring Cup',
        '1 Measuring Spoon Set',
        '3 Mixing Bowls',
        '2 Pot Holders',
        '4 Silverware Place Settings',
        '1 Silverware Tray',
        '1 Toaster',
        '1 Cooking Utensil Set with Crock',
        '1 Large Wastebasket',
        '4 Cloth Napkins',
        '4 Place Mats',
        '1 Tea Kettle'
    ],
    hwStandardBathroom: [
        '1 Bath Rug',
        '1 Shower Curtain, Liner, and Hooks Set',
        '4 Bath Towels',
        '4 Hand Towels',
        '4 Wash Cloths',
        '1 Small Wastebasket',
        '1 Toilet Brush',
        '1 Soap Dish',
        '1 Toothbrush Holder',
        '1 Tumbler Cup'
    ],
    hwStandardBedroom: [
        '1 Clock Radio',
        '4 Pillow Cases',
        '4 Pillows',
        '1 Comforter',
        '1 Blanket',
        '1 Mattress Pad',
        '2 Sheet Set',
        '10 Hangers'
    ],
    hwStandardCleaning: [
        '1 Iron & Board',
        '1 Vacuum',
        '1 Broom and Dustpan',
        '1 Mop and Bucket'
    ],
    hwStandardMisc: [
        '1 Phone'
    ],
    hwStandardAddlBedKitchen: [
        '2 Dish Place Settings',
        '2 Beverage Glasses',
        '2 Rocks Glasses',
        '2 Silverware Place Settings',
        '2 Cloth Napkins',
        '2 Wine Glasses',
        '2 Coffee Cups'
    ],
    hwStandardAddlBedBathroom: [
        '2 Bath Towels',
        '2 Hand Towels',
        '2 Wash Cloths',
        '1 Toothbrush Holder'
    ],
    hwStandardAddlBedBedroom: [
        '1 Clock Radio',
        '4 Pillow Cases',
        '2 Pillows',
        '1 Comforter',
        '1 Blanket',
        '1 Mattress Pad',
        '2 Sheet Set',
        '10 Hangers'
    ],
    hwUpgradedKitchen: [
        '1 Baking/Casserole Dish',
        '1 Knife Set / Block',
        '1 Cutting Board',
        '1 Pizza Cutter',
        '1 Vegetable Peeler',
        '1 Ice Cream Scoop',
        '1 Can Opener',
        '1 Coffee Pot',
        '1 Cheese Grater',
        '1 Colander',
        '1 Cookware Set with a Teflon Skillet',
        '1 Corkscrew Bottle Opener',
        '2 Dish Cloths',
        '2 Dish Towels',
        '4 Dish Place Settings',
        '4 Beverage Glasses',
        '4 Wine Glasses',
        '4 Rocks Glasses',
        '4 Coffee Cups',
        '1 Juice Pitcher',
        '1 Measuring Cup',
        '1 Measuring Spoon Set',
        '3 Mixing Bowls',
        '2 Pot Holders',
        '4 Silverware Place Settings',
        '1 Silverware Tray',
        '1 Toaster',
        '1 Cooking Utensil Set with Crock',
        '1 Large Wastebasket',
        '4 Cloth Napkins',
        '4 Place Mats',
        '1 Tea Kettle (electric if available)'
    ],
    hwHighlightUpgradedKitchen: [
        '1 Tea Kettle (electric if available)'
        ],
    hwUpgradedBathroom: [
        '1 Premium Bath Rug',
        '1 Shower Curtain, Liner, and Hooks Set',
        '4 Bath Towels',
        '4 Hand Towels',
        '4 Wash Cloths',
        '1 Small Wastebasket',
        '1 Toilet Brush',
        '1 Soap Dish',
        '1 Toothbrush Holder',
        '1 Tumbler Cup'
    ],
    hwHighlightUpgradedBathroom: [
        '1 Premium Bath Rug'
    ],
    walkthroughUnit: [
        'Date of Walkthrough',
        'Community name',
        'Unit Address',
        'Unit Number'
    ],
    walkthroughSecurity: [
        'Confirm key is returned to lock box (if applicable) Y/N',
        'Picture of key in lock box taken (if applicable) Y/N',
        'Call box instructions? Y/N',
        'Pictures of call box instructions (if applicable) Y/N'
    ],
    walkthroughEntry: [
        '1-2 Exterior entry photos with unit number if applicable',
        '1-2 Interior entry photos',
        'Entry swept and cleaned? Y/N',
        'Light fixture functioning? Y/N',
        'Dead bolt functioning? Y/N'
    ],
    walkthroughKitchen: [
        'Overview',
        '2-3 kitchen photos',
        'Flooring clean and damage-free? Y/N',
        'Window treatments clean and damage-free? Y/N',
        'Walls clean and damage-free? Y/N',
        'Countertops, pantry, cabinets, drawers clean and in good condition? Y/N',
        'All lights and fixtures functioning? Y/N',
        'Appliances',
        'Refrigerator running, empty, & clean? Y/N',
        'Freezer running and clean? Y/N',
        'Ice maker functioning and ice clean? Y/N',
        'Stove clean? Y/N',
        'Stove Fan and light functioning? Y/N',
        'Microwave clean, functioning and set to correct time? Y/N',
        'Dishwasher clean and functioning? Y/N',
        'Sink',
        'Sink Clean? Y/N',
        'Hot and cold water working? Y/N',
        'Garbage disposal functioning and free of odor? Y/N',
        'Cabinet below sink clean and no apparent leaks? Y/N',
        'Housewares',
        'Housewares arranged neatly in cabinets? Y/N',
        'Dish towels clean and neatly presented? Y/N',
        'Coffee maker clean and neatly presented? Y/N',
        'Wastebasket clean with a new liner? Y/N'
        ],
    walkthroughDiningRm: [
        'Overview',
        '2-3 dining room photos',
        'Window treatments clean and damage-free? Y/N',
        'Walls clean and damage-free? Y/N',
        'Light fixture functioning? Y/N',
        'Furniture',
        'Dining table and chair legs tightened? Y/N',
        'Artwork centered and correct height? Y/N',
        'Table set? Y/N',
        'Furniture clean, wiped down, and in good condition? Y/N',
        'Table décor clean and neatly displayed? Y/N'
    ],
    walkthroughLivingRm: [
        'Overview',
        '2-3 living room photos',
        'Carpet and floor clean and damage-free? Y/N',
        'Window treatments clean and damage-free? Y/N',
        'Walls clean and damage-free? Y/N',
        'Ceiling fan clean and functioning? Y/N',
        'Balcony clean and damage-free and balcony door lockable? Y/N',
        'Furniture & Housewares',
        'Artwork centered and correct height? Y/N',
        'Lamp(s) functioning and shade seam(s) hidden?',
        'Furniture clean, wiped down, and in good condition? Y/N',
        'TV clean and functioning? Y/N',
        'TV remote functioning? Y/N',
        'DVD player clean and functioning? Y/N',
        'DVD remote functioning? Y/N',
        'Cable service is active and functioning? Y/N'
    ],
    walkthroughMasterBathroom: [
        'Overview',
        '2-3 bathroom photos',
        'Flooring clean and damage-free? Y/N',
        'Window treatments clean and damage-free? Y/N',
        'Light fixtures functioning? Y/N',
        'Cabinets clean and free of water damage? Y/N',
        'Bathroom fan clean and functioning? Y/N',
        'Towel holder/hook secure? Y/N',
        'Plumbing',
        'Toilet flushes, is clean and functioning? Y/N',
        'Tub and/or shower clean and functioning?',
        'Hot and cold water working? Y/N',
        'Any water leaking (toilets/faucets)? Y/N',
        'Housewares',
        'Housewares clean and displayed neatly? Y/N',
        'Shower rod and curtain installed properly? Y/N',
        'Bath mats present? Y/N'
    ],
    walkthroughBedRm: [
        'Overview',
        '2-3 photos',
        'Carpet and floor clean and damage-free? Y/N',
        'Window treatments clean and damage-free? Y/N',
        'Walls clean and damage-free? Y/N',
        'Ceiling fan clean and functioning? Y/N',
        'Furniture & Housewares',
        'Furniture clean, wiped down, and in good condition? Y/N',
        'Artwork centered and correct height? Y/N',
        'Bedding wrinkle-free and properly made? Y/N',
        '4 main pillows present? Y/N',
        'Throw pillow present? Y/N',
        'Extra linens in closet neatly folded? Y/N',
        'Alarm clock present and set to correct local time with alarm off? Y/N',
        'Lamp(s) functioning and shade seam hidden? Y/N',
        'TV clean and functioning? Y/N',
        'TV remote functioning? Y/N',
        'Cable service active? Y/N'
    ],
    walkthroughCoatCloset: [
        '1-3 photos',
        'Clean and empty? Y/N'
    ],
    walkthroughLaundryCloset: [
        '1-3 utility closet photos',
        'Washer and dryer clean and functioning? Y/N',
        'Any water leaking from the washer? Y/N',
        'Dryer lint catch clean? Y/N',
        'Iron and ironing board present? Y/N',
        'Cleaning kit present? Y/N',
        'Vacuum clean and functioning? Y/N',
        'A/C unit filter clean? Y/N'
    ],
    walkthroughServices: [
        'Phone and phone service is working? Y/N',
        'WiFi on and working? Y/N',
        'WiFi name and password left in the unit for the guest? Y/N'
    ],
    walkthroughGeneral: [
        'Notified Travelers Haven of existing damages? Y/N',
        'Notified Travelers Haven of any rodent, pest, or bug infestation? Y/N',
        'Any pet, smoke, or musty odors? Y/N',
        'Packaging materials removed from premises? Y/N',
        'Any property damage caused during install? Y/N',
        'Move-in report completed by'
    ]

};

var LeaseOptions = {
    petsAllowed: 'Pets Allowed',
    furnished: 'Furnished',
    tv: 'TV',
    housewares: 'Housewares',
    microwave: 'Microwave',
    electric: 'Electric',
    water: 'Water',
    gas: 'Gas',
    trash: 'Trash',
    cable: 'Cable',
    internet: 'Internet',
    phone: 'Phone',
    lawnSnow: 'Lawn/Snow',
    cleaning: 'Cleaning'
};

var Buttons = {
    cancel: 'Cancel',
    ok: 'OK',
    inviteTravelers: 'Invite Your Travelers',
    learnMore: 'Learn More',
    explore: 'Explore',
    manage: 'Manage',
    submitInvitation: 'Submit Invitation',
    createFreeAccount: 'Create your free account',
    createNewPropertyAccount: 'Create New Property Account',
    viewActivities: 'View Activities',
    continueToVendor: 'Continue to Vendor',
    continueToReview: 'Continue to Review',
    createLease: 'Create Lease',
    open: 'Open',
    addActivity: 'Add Activity',
    onlyPastDue: 'Only Past Due',
    create: 'Create',
    add: 'Add',
    moveToClosed: 'Move To Closed',
    complete: 'Complete',
    update: 'Update',
    permissionToEnter: 'Permission to Enter',
    partner: 'Partner / Partner Pending',
    pending: 'Pending',
    incomplete: 'Incomplete',
    listed: 'Listed',
    unlisted: 'Unlisted',
    all: 'All',
    send: 'Send',
    createYourAccount: 'Create your account',
    getStarted: 'Get Started',
    getstarted: 'Get started',
    addAPriceSheet: 'Add a Price Sheet',
    noThanks: 'No Thanks',
    close: 'Close',
    prefill: 'Prefill',
    confirm: 'Confirm',
    delete: 'Delete',
    addAMarket: 'Add a Market',
    startYourSearch: 'Start Your Search',
    signIn: 'Sign In',
    viewOption: 'View Option',
    manageOrder: 'Manage Order',
    updateHousingOrder: 'Update',
    checkYourCredit: 'Check Your Credit',
    submitLeaseApplication: 'Submit Lease Application',
    changePassword: 'Change my password',
    viewOrder: 'View Order',
    upgradeLeadToOrder: 'Save Client & Upgrade Lead',
    submitHousingRequest: 'Submit Housing Request',
    upgradeLead: 'Upgrade',
    upgradeLead2: 'Upgrade Lead',
    addNewClient: 'Add New Client',
    addAddress: 'Add an Address',
    saveAllTabs: 'Save All Tabs',
    joinFree: 'Join Free',
    requestHousing: 'Request Housing',
    requestToBook: 'Request to Book',
    signUp: 'Sign Up',
    continue: 'Continue',
    reserveUnit: 'Reserve Unit',
    sendBGCheck: 'Send Background Check Email',
    takeBGCheck: 'Take Background Check',
    newHousingOrder: 'New Housing Order',
    addOccupant: '+ Add another occupant',
    addPet: '+ Add a pet',
    request: 'Request',
    submit: 'Submit',
    sendToProperty: 'Send to Property',
    saveSectionSelections: 'Save section selections',
    inviteSupplier: 'Invite Supplier'
};

var Contacts = {
    conciergePhoneNumber: '720.306.8990'
};

var UserMenu = {
    userSettings: 'User Settings',
    companySettings: 'Company Settings',
    adminSettings: 'Admin',
    logout: 'Logout',
    signOut: 'Sign Out'
};

var Emails = {
    //domainMailosaur: '.' + process.env.MAILOSAUR_SERVER_ID +'@mailosaur.io',
    domainMailosaur: '.' + 'htcoikvm' +'@mailosaur.io',
    domainMailinator: '@mailinator.com',
    domainYopmail: '@yopmail.com',
    //apiKeyMailosaur: process.env.MAILOSAUR_KEY,
    apiKeyMailosaur: '8shDKVffuxIcAoN',
    //serverIdMailosaur: process.env.MAILOSAUR_SERVER_ID,
    serverIdMailosaur: 'htcoikvm',
    inviteStipendTravelerSubject: "You’ve Been Invited!",  //NOTE: The apostrophe in this is not a single quote!
    signupConfirmation: 'Thank You for Signing up!',
    inviteVendorSubject: 'Reach 20k+ tenants with Travelers Haven',
    confirmVendorSubject: 'Confirmed! You\'re in.',
    inviteVendorCoworkerSubject: 'You\'ve been invited!',
    newOptionSubject: 'has a new housing option near ',
    shareOptionSubject: 'You have a new housing option!',
    permissionToEnterSubject: 'Action Requested: Permission to Enter',
    leaseApplicationSubject: 'Next Steps',
    resetPasswordSubject: 'Reset password instructions',
    leaseApplicationCompletedSubject: 'Lease application completed',
    housingOrderConfirmation: 'Travelers Haven: Housing Request',
    optionNoticeToAM: 'just sent an option',
    requestOptionToAM: 'has requested an additional option',
    optionDeclinedToAM: 'just declined your option',
    optionDeclinedToAff: 'A client just declined your option',
    leadToAffiliate: 'See the new order in your market!',
    optionAcceptedToAM: 'just accepted your option',
    optionAcceptedPendingBGToAM: 'accepted an option with a pending background check',
    optionAcceptedNeedsReviewToAM: 'An option is awaiting your review',
    optionAcceptedToAff: 'has been accepted',
    optionUnitDeclinedToAM: 'has been declined',
    optionUnitConfirmedToAM: 'has been confirmed',
    bgCheck: 'Next Steps – Background Check',
    propertyHoldRequest: 'Property hold request for ',
    optionSummary: 'You have housing options waiting',
    inviteSupplier: 'You\'ve been invited'
};

var ToasterMessages = {
    activityCreated: 'Activity created.',
    activityUpdated: 'Activity Updated',
    preferencesSaved: 'Preferences successfully saved.',
    settingSaved: 'Your setting saved successfully!',
    vendorInvitationSent: 'Vendor invitation sent',
    priceSheetSaved: 'Price sheet successfully saved',
    priceSheetDeleted: 'Price sheet deleted',
    marketSaved: 'Successfully saved market',
    marketDeleted: 'Market deleted',
    customFieldsSaved: 'Custom fields successfully saved.',
    leadUpgraded: 'Client successfully saved. Redirecting you to order form.',
    requestSubmitted: 'Request Submitted Successfully',
    clientSaved: 'Client saved successfully.',
    bgCheckEmailSent: 'Background Check Email Sent',
    orderSubmitted: 'Order successfully submitted.',
    companySettingSavedReview: 'Review settings successfully saved.',
    companySettingSavedNTV: 'Notice to vacate settings successfully saved.',
    companySettingSavedCustom: 'Custom fields successfully saved.',
    sectionSelectionsSavedPrefs: 'Woohoo! Housing requirements & preferences section saved successfully to housing request defaults.',
    sectionSelectionsSavedFurn: 'Woohoo! Furniture & housewares section saved successfully to housing request defaults.',
    sectionSelectionsSavedServices: 'Woohoo! Services section saved successfully to housing request defaults.',
    supplierInvited: 'Affiliate invitation sent',
    hotelOrderCreated: 'Hotel order successfully created.'

};

var Alerts = {
    passwordTooShort: 'Password Must Have 8 Characters',
    passwordTooShort2: 'Password must have at least 8 characters',
    passwordsDoNotMatch: 'Passwords Must Match',
    passwordsDoNotMatch2: 'Passwords must match',
    userAlreadyRegistered: 'User already exists in our system. Please contact us for support.',
    privacyPolicyTerms: 'Must Accept Terms',
    userExists: 'User already exists',
    poBoxNotAllowed: 'P.O. boxes are not allowed'
};

var Activities = {
    concierge: 'Concierge',
    submitLease: 'Submit Lease',
    sendBusinessApp: 'Send Business Application',
    backgroundCheckReceived: 'Background Check Received',
    backgroundCheckSent: 'Background Check Sent',
    moveInCheckRequest: 'Move In Check Request',
    moveInCall: 'Move In Call',
    leaseReceived: 'Lease Received',
    leaseAudit: 'Lease Audit',
    approveHoldFunds: 'Approve Hold Funds',
    w9Received: 'W9 Received',
    furnitureDelivery: 'Furniture Delivery',
    furniturePickup: 'Furniture Pickup',
    housewaresOn: 'Housewares On',
    housewaresOff: 'Housewares Off',
    washerDryerOn: 'Washer Dryer On',
    washerDryerOff: 'Washer Dryer Off',
    electricOn: 'Electric On',
    electricOff: 'Electric Off',
    waterOn: 'Water On',
    waterOff: 'Water Off',
    gasOn: 'Gas On',
    gasOff: 'Gas Off',
    trashOn: 'Trash On',
    trashOff: 'Trash Off',
    cableOn: 'Cable On',
    cableOff: 'Cable Off',
    phoneOn: 'Phone On',
    phoneOff: 'Phone Off',
    lawnSnowOn: 'Lawn Snow On',
    lawnSnowOff: 'Lawn Snow Off',
    internetOn: 'Internet On',
    internetOff: 'Internet Off',
    cleaningOn: 'Cleaning On',
    cleaningOff: 'Cleaning Off',
    none: 'None'
};

var ActivityStatuses = {
    created: 'Created',
    open: 'Open',
    scheduledOn: 'Scheduled On',
    on: 'On',
    scheduledOff: 'Scheduled Off',
    off: 'Off',
    closed: 'Closed'
};

var LeadStatuses = {
    new: 'NEW',
    working: 'WORKING',
    closed: 'CLOSED LOST',
    boughtHouse: 'BOUGHT A HOUSE',
    duplicate: 'DUPLICATE LEAD'
};

var ClientTypes = {
    individual: 'Individual',
    business: 'Business'
};

var LeadSources = {
    thd: 'THD',
    blu: 'Blu',
    sth: 'STH'
};

var CreditCheckTypes = {
    individual: 'Individual',
    business: 'Business',
    none: 'None (pre-approved)'
}

var RevenueShareTypes = {
    pctRev: '% of revenue',
    amtMonth: '$ per month',
    amtDay: '$ per day',
    amtLease: '$ per lease'
};

var PageSizes = {
    ten: '10',
    twentyfive: '25',
    fifty: '50',
    onehundred: '100'
};

var FeesDefault = {
    insurance: '12',
    admin: '100',
    phoneService: '75',
    cableSetup: '50',
    internetSetup: '50',
    phoneSetup: '50',
    concierge: '90',
    electricSetup: '25',
    gasSetup: '25',
    waterSetup: '25',
    cableBox: '15'
};

var FeesCleaning = {
    studio: '115',
    one: '150',
    two: '165',
    threePlus: '215'
};

var FeesCableService = {
    standard: '75',
    upgraded: '100',
    premium: '125'
};

var FeesInternetService = {
    standard: '75',
    upgraded: '100',
    premium: '125'
};

var FeesHousekeeping = {
    one: '85',
    two: '110',
    threePlus: '135'
};

var MultiplierHousekeeping = {
    weekly: 4.33,
    biweekly: 2.17
};

var FeesUtilities = {
    one: '145',
    two: '170',
    threePlus: '195'
};

var FeesConsumer = {
    holding: '39'
}

var ClientAccountTabs = {
    general: 'General',
    optionsInd: 'Option Settings',
    optionsBus: 'Option & Partner Settings',
    users: 'Users',
    controls: 'Controls'
};

var OptionBadges = {
    amReview: 'AM Review',
    sent: 'Sent',
    declined: 'Declined',
    accepted: 'Accepted',
    confirmed: 'Confirmed',
    unitDeclined: 'Unit Declined',
    backgroundPending: 'Background Pending'
};

var PropertyTypes = {
    apartment: 'Apartment',
    house: 'Single Family House',
    townhouse: 'Townhouse/Condo'
};

/* PROTRACTOR VALUES */
var Users = {
    regeenaAdmin: Params.sharedVars.thpAdmin,
    regeenaAdminName: 'Regeena Massa',
    regeenaClient: 'threg+client-admin.htcoikvm@mailosaur.io',
    regeenaClientName: 'Regeena Client',
    billAdmin: 'bill.buse@travelershaven.com',
    billAdminName: 'Bill Buse',
    password: Params.sharedVars.thpPassword,
    susanAdmin: 'bill.buse@travelershaven.com',
    susanAdminName: 'Bill Buse',
    password: Params.sharedVars.thpPassword,
    amnGlobalAdmin: 'amn-global-1.htcoikvm@mailosaur.io',
    amnGlobalAdminPassword: Params.sharedVars.thpPassword,
    amnGlobalAdminName: 'Susan Test User',
    kimAffiliate: 'kimhsunsupplyco@yopmail.com',
    kimAffiliateName: 'Kim Affiliate User',
    kimPassword: Params.sharedVars.thpPassword,
    susanAffiliate: 'susansupply' + Params.sharedVars.emailDomain,
    susanAffiliateName: 'Susan Affiliate',
    kimAR: 'khultgren@travelershaven.com',
    kimARName: 'Kims Admin User',
    autoTraveler: 'autotraveler' + Params.sharedVars.emailDomain,
    autoTravelerName: 'Automation Traveler',
    autoAM: 'autoam' + Params.sharedVars.emailDomain,
    autoAMName: 'Automation AM',
    autoTM: 'autotm' + Params.sharedVars.emailDomain,
    autoTMName: 'Automation TM',
    kiewitAdmin: 'kiewitadmin' + Params.sharedVars.emailDomain,
    kiewitAdminName: 'Kiewit Admin',
    kiewitCoord: 'kiewitcoord' + Params.sharedVars.emailDomain,
    kiewitCoordName: 'Kiewit Coord',
    autoClient1Admin: 'autoclient1'  + Params.sharedVars.emailDomain,
    autoClient1AdminName: 'auto client1',
    autoAdmin1: 'autoadmin1'  + Params.sharedVars.emailDomain,
    autoAdmin1Name: 'Automation Admin1',
    kimFurniture: 'kimhfurniture002@yopmail.com',
    kimFurnitureName: 'Kim Furniture Vendor'
};

var Accounts = {
    travelersHaven: 'Travelers Haven',
    travelMax: 'TravelMax',
    amnGlobal: 'AMN Global',
    autoClient1: 'Automation Client1',
    autoClient2: 'Automation Client2'
};

var Properties = {
    orchardGardens: {
        contactName: 'Susan',
        contactEmail: 'orchardgardens.htcoikvm@mailosaur.io',
        contactPhone: '(444) 555-3333',
        address: '260 S 11th Ave Highland Park, NJ 08904'
    }
};

var Vendors = {
    vendorThatHasEverything: {
        name: 'VENDOR that has Everything',
        contactName: 'Kim Contact One',
        contactEmail: 'k123hultgren.hqklhzrh@mailosaur.io',
        contactPhone: '(303) 933-5252'
    }
};

var GHAVendors = {
    automationVendor: {
        companyName: 'Automation Vendor',
        email: 'autotestvendor.htcoikvm@mailosaur.io',
        userName: 'Autotest Vendor'
    },
    colorfulFurnitureCo: {
        companyName: 'Colorful Furniture Company',
        email: 'kimhfurniture002@yopmail.com',
        userName: 'Kim Furniture Vendor'
    }
};

var GHASuppliers = {
    sunshineDaySupplierCompany: {
        companyName: 'SunShine Day Supplier Company',
    }
};

var ApplicantDavid = {
    firstName: 'David',
    lastName: 'Ascione',
    ssn: '888327205',
    dob: '01012000', //'06061961',
    income: '6000',
    streetAddress: '282 Grove St',
    city: 'Teaneack',
    state: 'NJ',
    zipCode: '07666',
    rent: '1200',
    creditCardNum: '4242424242424242', //'4111111111111111',
    securityCode: '666'
};

var AffiliateOrderStatuses = {
    open: 'Open',
    optionSent: 'Option Sent',
    accepted: 'Accepted',
    closed: 'Closed',
    canceled: 'Canceled',
    bidLost: 'Bid Lost'
}
}

/* EXPORT */
export default constants;


