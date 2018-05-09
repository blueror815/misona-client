/**
 * App interface messages declaration.
 */
export interface Messages {
  account: {
    account: string,
    accountDetails: string,
    myAccount: string,
    returnToAccountDetails: string,
  },

  auth: {
    alreadyHaveAccount: string,
    create: string,
    createAccount: string,
    forgotYourPassword: string,
    invalidLoginCredentials: string,
    loggedInAs: string,
    logIn: string,
    login: string,
    logOut: string,
    logout: string,
    passwordResetHint: string,
    passwordResetSuccess: string,
    passwordResetSuccessHint: string,
    resetPassword: string,
    resetYourPassword: string,
    signIn: string,
    signingIn: string,
    signUp: string,
  },

  cart: {
    addToCart: string,
    cart: string,
    loadingCart: string,
    shoppingCart: string,
    yourCartIsEmpty: string,
  },

  checkout: {
    buyThisProduct: string,
    checkout: string,
    customerInfo: string,
    gettingOrderReady: string,
    itWillBeNeededToTrack: string,
    logInInfinitive: string,
    logInToView: string,
    logInToViewDetails: string,
    notCustomer: string,
    orderCheckout: string,
    orderUpdates: string,
    pay: string,
    paymentMethod: string,
    //payWithPaypal: string,
    returnToCart: string,
    showOrderSummary: string,
    toRepeatOrShare: string,
    trackYourOrderStatusHere: string,
    updatesWillBeSentTo: string,
    weVeAcceptedYourOrder: string,
    withPayPal: string,
    youAlsoCan: string,
    youCanFindYourOrderNumber: string,
    yourOrderIsConfirmed: string,
    yourOrderNumberIs: string,
    youWillReceiveYourPackage: string,
  },

  common: {
    cancel: string,
    clickTo: string,
    continueShopping: string,
    home: string,
    misona: string;
    or: string,
    returnToStore: string,
    send: string,
    showMore: string,
    thankYou: string,
    tryAgain: string,
  },

  delivery: {
    address: string,
    city: string,
    country: string,
    fullName: string,
    phone: string,
    postalCode: string,
    shippingAddress: string,
  },

  errors: {
    couldNotConnectToServer: string,
    errorOccurred: string,
    ifErrorRemains: string,
    internalApplicationError: string,
    itemSoldOutOrPageNotExists: string,
    pageNotFound: string,
    sorryWeEncounteredError: string,
    timeout10sExceeded: string,
  },

  info: {
    blog: string,
    blogLink: string,
    company: string,
    companyInfo: string,
    confirmYouAreNotRobot: string,
    contactUs: string,
    faq: string,
    feedback: string,
    help: string,
    message: string,
    misonaDescription: string,
    needHelp: string,
    orWriteUsDirectlyOn: string,
    privacyPolicy: string,
    questionsAndAnswers: string,
    thanksForContactingUs: string,
    subject: string,
    termsOfService: string,
    whatIsMisona: string,
  },

  marketing: {
    directlyFromJapan: string,
    fishingGoods: string,
    freeInternationalDelivery: string,
    freeInternationalShipping: string,
    headerSlogan: string,
  },

  order: {
    date: string,
    fulfilled: string,
    id: string,
    loadingOrder: string,
    order: string,
    orderHistory: string,
    orderNumber: string,
    orderStatus: string,
    placed: string,
    status: string,
    total: string,
    unfulfilled: string,
    youHaveNotPlacedOrdersYet: string,
  },

  product: {
    browseByCategories: string,
    category: string,
    loadingProduct: string,
    moreCategories: string,
    noProductsWereFound: string,
    price: string
    product: string,
    quantity: string,
    searchBarPlaceholder: string,
    searchingForProducts: string,
    searchResultsFor: string,
    showTranslatedDescription: string,
    tryUpdatingSearchQuery: string,
  },

  settings: {
    currency: string,
    language: string,
    settings: string,
    shipTo: string,
  },

  validation: {
    addressRule: string,
    digitsOnly: string,
    fullNameRule: string,
    invalidEmailorOrderNumber: string,
    passwordRule: string,
    phoneRule: string,
    thisEmailAddressIsTaken: string,
  },

  user: {
    email: string,
    fullName: string,
    password: string,
  },

}