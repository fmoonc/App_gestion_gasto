import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const colors = {
  mainColor: '#142535',
  white: '#FFFFFF',
  transparent: 'transparent',
  textColor: '#4A5F73',
  accent: '#F84C6B',
  strokeColor: '#DBE9F5',
};

const fonts = {
  H1: {
    fontFamily: 'Inter-Bold',
    fontSize: 32,
    lineHeight: 32 * 1.3,
  },
  H2: {
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    lineHeight: 22 * 1.4,
  },
  H3: {
    fontFamily: 'Inter-Medium',
    fontSize: 20,
    lineHeight: 20 * 1.2,
  },
  H4: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    lineHeight: 18 * 1.2,
  },
  H5: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    lineHeight: 14 * 1.2,
  },
  DMSans_400Regular: {
    fontFamily: 'DMSans-Regular',
  },
  DMSans_500Medium: {
    fontFamily: 'DMSans-Medium',
  },
  DMSans_700Bold: {
    fontFamily: 'DMSans-Bold',
  },
  textStyle14: {
    fontFamily: 'DMSans-Regular',
    fontSize: 14,
    lineHeight: 14 * 1.5,
  },
  textStyle16: {
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
    lineHeight: 16 * 1.7,
  },
};

const sizes = {
  width,
  height,
};

const screens = {
  TabNavigator: 'TabNavigator',
  Onboarding: 'Onboarding',
  AddANewAddress: 'AddANewAddress',
  AddANewCard: 'AddANewCard',
  Categories: 'Categories',
  Checkout: 'Checkout',
  ConfirmationCode: 'ConfirmationCode',
  Description: 'Description',
  EditProfile: 'EditProfile',
  Filter: 'Filter',
  ForgotPassword: 'ForgotPassword',
  ForgotPasswordSentEmail: 'ForgotPasswordSentEmail',
  Home: 'Home',
  LeaveAReview: 'LeaveAReview',
  MyAddress: 'MyAddress',
  MyPromocodes: 'MyPromocodes',
  NewPassword: 'NewPassword',
  Notifications: 'Notifications',
  Order: 'Order',
  OrderFailed: 'OrderFailed',
  OrderHistory: 'OrderHistory',
  OrderHistoryOptions: 'OrderHistoryOptions',
  OrderSuccessful: 'OrderSuccessful',
  PaymentMethod: 'PaymentMethod',
  ProductLong: 'ProductLong',
  ProductShort: 'ProductShort',
  Profile: 'Profile',
  Reviews: 'Reviews',
  Shop: 'Shop',
  SignIn: 'SignIn',
  SignUp: 'SignUp',
  SignUpAccountCreated: 'SignUpAccountCreated',
  TrackYourOrder: 'TrackYourOrder',
  VerifyYourPhoneNumber: 'VerifyYourPhoneNumber',
  Wishlist: 'Wishlist',
};

const theme = {
  colors,
  fonts,
  sizes,
  screens,
};

export {theme};
