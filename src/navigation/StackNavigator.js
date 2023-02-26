import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '../screens';
import {theme} from '../constants';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={theme.screens.Onboarding}
        screenOptions={{
          gestureEnabled: false,
          cardStyle: {backgroundColor: 'white'},
        }}
      >
        <Stack.Screen
          name={theme.screens.TabNavigator}
          component={screens.TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.Onboarding}
          component={screens.Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.SignIn}
          component={screens.SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.SignUp}
          component={screens.SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.ForgotPassword}
          component={screens.ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.NewPassword}
          component={screens.NewPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.ForgotPasswordSentEmail}
          component={screens.ForgotPasswordSentEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.VerifyYourPhoneNumber}
          component={screens.VerifyYourPhoneNumber}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.ConfirmationCode}
          component={screens.ConfirmationCode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.SignUpAccountCreated}
          component={screens.SignUpAccountCreated}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.Shop}
          component={screens.Shop}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.ProductLong}
          component={screens.ProductLong}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.ProductShort}
          component={screens.ProductShort}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.OrderHistory}
          component={screens.OrderHistory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.PaymentMethod}
          component={screens.PaymentMethod}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.MyAddress}
          component={screens.MyAddress}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.MyPromocodes}
          component={screens.MyPromocodes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.EditProfile}
          component={screens.EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.Checkout}
          component={screens.Checkout}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.Filter}
          component={screens.Filter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.Description}
          component={screens.Description}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.Reviews}
          component={screens.Reviews}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.OrderSuccessful}
          component={screens.OrderSuccessful}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.LeaveAReview}
          component={screens.LeaveAReview}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.OrderFailed}
          component={screens.OrderFailed}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.TrackYourOrder}
          component={screens.TrackYourOrder}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.Notifications}
          component={screens.Notifications}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.OrderHistoryOptions}
          component={screens.OrderHistoryOptions}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.AddANewCard}
          component={screens.AddANewCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={theme.screens.AddANewAddress}
          component={screens.AddANewAddress}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
