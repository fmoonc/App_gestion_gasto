import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets';

const SignUp = ({navigation}) => {
  const renderHeader = () => {
    return <components.Header goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: theme.sizes.height * 0.1,
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            ...theme.fonts.H1,
            color: theme.colors.mainColor,

            marginBottom: 14,
            textTransform: 'capitalize',
            marginBottom: 40,
          }}
        >
          Sign up
        </Text>
        <components.InputField
          title='Email'
          containerStyle={{marginBottom: 20}}
          placeholder='Mariah Franklin'
          checkIcon={true}
        />
        <components.InputField
          title='Email'
          containerStyle={{marginBottom: 20}}
          placeholder='mariahfranklin@mail.com'
          checkIcon={true}
        />
        <components.InputField
          title='password'
          containerStyle={{marginBottom: 20}}
          placeholder='••••••••'
          secureTextEntry={true}
          eyeOffIcon={true}
        />
        <components.InputField
          title='confirm password'
          containerStyle={{marginBottom: 20}}
          placeholder='••••••••'
          secureTextEntry={true}
          eyeOffIcon={true}
        />
        <components.Button
          title='Sign up'
          containerStyle={{marginBottom: 20}}
          onPress={() =>
            navigation.navigate(theme.screens.VerifyYourPhoneNumber)
          }
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              ...theme.fonts.textStyle16,
              color: theme.colors.textColor,
            }}
          >
            Already have an account?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(theme.screens.SignIn)}
          >
            <Text
              style={{
                ...theme.fonts.textStyle16,
                color: theme.colors.mainColor,
              }}
            >
              Sign in.
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  };

  const renderFooter = () => {
    return (
      <View style={{paddingHorizontal: 20}}>
        <Text
          style={{
            ...theme.fonts.textStyle16,
            lineHeight: 16 * 1.7,
            color: theme.colors.textColor,
            marginBottom: 20,
          }}
        >
          Sign up with social networks:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
        >
          <TouchableOpacity>
            <svg.FacebookSvg />
          </TouchableOpacity>
          <TouchableOpacity>
            <svg.TwitterSvg />
          </TouchableOpacity>
          <TouchableOpacity>
            <svg.GoogleSvg />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <components.CustomSafeArea>
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </components.CustomSafeArea>
  );
};

export default SignUp;
