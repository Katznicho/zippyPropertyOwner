export const BASE_URL = "https://dashboard.zippyug.com/api/v1";

export const LOGIN = `${BASE_URL}/property_owner/login`;
export const REGISTER = `${BASE_URL}/property_owner/registerCommunity`;
export const LOGOUT = `${BASE_URL}/property_owner/logout`;
export const FORGOT_PASSWORD = `${BASE_URL}/property_owner/requestPasswordReset`;
export const RESET_PASSWORD = `${BASE_URL}/property_owner/resetPassword`;
export const RESEND_OTP = `${BASE_URL}/property_owner/resendOTP`
export const VERIFY_EMAIL = `${BASE_URL}/property_owner/verifyEmail`
export const SAVE_DEVICE_INFO = `${BASE_URL}/property_owner/saveDeviceInfo`
export const SETUP_WALLET_ACCOUNT = `${BASE_URL}/property_owner/setUpUserWalletAccount`;
export const UPDATEWALLETBALANCE = `${BASE_URL}/property_owner/updateShowWalletBalance`
export const UPDATEUSERAVATAR = `${BASE_URL}/property_owner/updateUserAvatarUrl`
export const UPDATE_USER_LOCATION = `${BASE_URL}/property_owner/updateUserLocation`;
export const UPDATE_PASSWORD_FIRST_USER = `${BASE_URL}/property_owner/resetPasswordFirstUser`;

//payments
export const PROCESSORDER = `${BASE_URL}/processOrder`;
export const USERPAYMENTS = `${BASE_URL}/getUserPayments`;
export const USERPRODUCTS = `${BASE_URL}/getUserProducts`

export const USERDELIVERIES = `${BASE_URL}/getUserDelivries`
export const USERNOTIFICATIONS = `${BASE_URL}/getUserNotifications`

//uploads
export const PROFILE_UPLOAD = `${BASE_URL}/profileUpload`;
export const IMAGES_UPLOAD = `${BASE_URL}/uploadIdImages`


//property owner
export const REGISTER_PROPERTY_OWNER = `${BASE_URL}/registerPropertyOwner`;
export const REGISTER_PROPERTY = `${BASE_URL}/registerPropertyByAgent`;
export const GET_ALL_REGISTERED_PROPERTY_OWNERS = `${BASE_URL}/getAllRegisteredPropertyOwners`;

export const GET_REGISTERED_USERS_BY_PAGE = `${BASE_URL}/getRegisterPropertyOwnersByPage`;
export const VERIFY_PROPERTY_OWNER = `${BASE_URL}/verifyPropertyOwnerPhoneNumber`

//Property owner
// Route::get("getRegisterPropertyOfOwnerByPage", [PropertyOwnerController::class, "getRegisterPropertyByPage"]);
// Route::post("getOwnerTotals", [PropertyOwnerController::class, "getOwnerTotals"]);

//property owner
export const GET_REGISTERED_OWNER_PROPERTY_BY_PAGE = `${BASE_URL}/getRegisterPropertyOfOwnerByPage`;






//general
export const GET_ALL_CATEGORIES = `${BASE_URL}/getAllCategories`;
export const GET_ALL_SERVICES = `${BASE_URL}/getAllServices`;
export const GET_ALL_AMENTITIES = `${BASE_URL}/getAllAmenities`;
export const GET_ALL_PROPERTY_STATUSES = `${BASE_URL}/getAllPropertyStatuses`
export const GET_ALL_CURRENCIES = `${BASE_URL}/getAllCurrencies`
export const GET_ALL_PAYMENT_PERIODS = `${BASE_URL}/getAllPaymentPeriods`


