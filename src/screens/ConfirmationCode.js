import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {components} from '../components';
import {theme} from '../constants';

const ConfirmationCode = ({navigation}) => {
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
            ...theme.fonts.textStyle16,
            color: theme.colors.textColor,
            marginBottom: 20,
          }}
        >
          Enter your OTP code here.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <View
            style={{
              backgroundColor: theme.colors.lightBlue2,
              width: 20,
              marginRight: 13,
            }}
          >
            <TextInput
              style={{
                textAlign: 'center',
                flex: 1,
                ...theme.fonts.DMSans_400Regular,
                fontSize: 20,
                lineHeight: 20 * 1.7,
              }}
              keyboardType='number-pad'
              maxLength={1}
            />
            <View
              style={{
                width: '100%',
                height: 4,
                borderRadius: 2.5,
                backgroundColor: theme.colors.mainColor,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: theme.colors.lightBlue2,
              width: 20,
              marginRight: 13,
            }}
          >
            <TextInput
              style={{
                textAlign: 'center',
                flex: 1,
                ...theme.fonts.DMSans_400Regular,
                fontSize: 20,
                lineHeight: 20 * 1.7,
              }}
              keyboardType='number-pad'
              maxLength={1}
            />
            <View
              style={{
                width: '100%',
                height: 4,
                borderRadius: 2.5,
                backgroundColor: theme.colors.mainColor,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: theme.colors.lightBlue2,
              width: 20,
              marginRight: 13,
            }}
          >
            <TextInput
              style={{
                textAlign: 'center',
                flex: 1,
                ...theme.fonts.DMSans_400Regular,
                fontSize: 20,
                lineHeight: 20 * 1.7,
              }}
              keyboardType='number-pad'
              maxLength={1}
            />
            <View
              style={{
                width: '100%',
                height: 4,
                borderRadius: 2.5,
                backgroundColor: theme.colors.mainColor,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: theme.colors.lightBlue2,
              width: 20,
              marginRight: 13,
            }}
          >
            <TextInput
              style={{
                textAlign: 'center',
                flex: 1,
                ...theme.fonts.DMSans_400Regular,
                fontSize: 20,
                lineHeight: 20 * 1.7,
              }}
              keyboardType='number-pad'
              maxLength={1}
            />
            <View
              style={{
                width: '100%',
                height: 4,
                borderRadius: 2.5,
                backgroundColor: theme.colors.mainColor,
              }}
            />
          </View>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 30}}
        >
          <Text
            style={{...theme.fonts.textStyle16, color: theme.colors.textColor}}
          >
            Didn’t receive the OTP?{' '}
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                ...theme.fonts.textStyle16,
                color: theme.colors.mainColor,
              }}
            >
              Resend.
            </Text>
          </TouchableOpacity>
        </View>
        <components.Button
          title='verify'
          onPress={() =>
            navigation.navigate(theme.screens.SignUpAccountCreated)
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

export default ConfirmationCode;
