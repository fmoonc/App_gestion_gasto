import {Text, View} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PhoneInput from 'react-native-phone-input';

import {components} from '../components';
import {theme} from '../constants';

const VerifyYourPhoneNumber = ({navigation}) => {
  const renderHeader = () => {
    return <components.Header goBack={true} title='Verify your phone number' />;
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
          We have sent you an SMS with a code to number +17 0123456789.
        </Text>
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#DBE9F5',
            marginBottom: 20,
          }}
        >
          <PhoneInput
            style={{
              paddingVertical: 16,
              paddingHorizontal: 25,
            }}
            initialCountry={'us'}
            initialValue='123456789'
            textStyle={{
              ...theme.fonts.DMSans_400Regular,
              fontSize: 16,
              color: theme.colors.mainColor,
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: -12,
              left: 13,
              paddingHorizontal: 10,
              backgroundColor: theme.colors.white,
            }}
          >
            <Text
              style={{
                ...theme.fonts.DMSans_500Medium,
                fontSize: 12,
                textTransform: 'uppercase',
                color: theme.colors.textColor,
                lineHeight: 12 * 1.7,
              }}
            >
              phone number
            </Text>
          </View>
        </View>
        <components.Button
          title='confirm'
          onPress={() => navigation.navigate(theme.screens.ConfirmationCode)}
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

export default VerifyYourPhoneNumber;
