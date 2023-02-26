import {Text} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {components} from '../components';
import {theme} from '../constants';

const NewPassword = ({navigation}) => {
  const renderHeader = () => {
    return <components.Header goBack={true} title='Reset password' />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          marginTop: 25,
          flexGrow: 1,
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
          Enter new password and confirm.
        </Text>
        <components.InputField
          title='new password'
          containerStyle={{marginBottom: 20}}
          placeholder='••••••••'
          eyeOffIcon={true}
        />
        <components.InputField
          title='confirm password'
          containerStyle={{marginBottom: 20}}
          placeholder='••••••••'
          eyeOffIcon={true}
        />
        <components.Button
          title='change password'
          onPress={() =>
            navigation.navigate(theme.screens.ForgotPasswordSentEmail)
          }
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

export default NewPassword;
