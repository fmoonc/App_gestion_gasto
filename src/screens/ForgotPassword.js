import {Text} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {components} from '../components';
import {theme} from '../constants';

const ForgotPassword = ({navigation}) => {
  const renderHeader = () => {
    return <components.Header goBack={true} title='Forgot password' />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: 25,
          marginHorizontal: 20,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            marginBottom: 40,
            ...theme.fonts.textStyle16,
            color: theme.colors.textColor,
          }}
        >
          Please enter your email address. You will receive a link to create a
          new password via email.
        </Text>
        <components.InputField
          title='Email'
          containerStyle={{marginBottom: 20}}
          placeholder='mariahfranklin@mail.com'
          eyeOffSvg={true}
        />
        <components.Button
          title='send'
          onPress={() => navigation.navigate(theme.screens.NewPassword)}
        />
      </KeyboardAwareScrollView>
    );
  };

  return (
    <components.CustomSafeArea>
      {renderHeader()}
      {renderContent()}
    </components.CustomSafeArea>
  );
};

export default ForgotPassword;
