import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets';

const SignIn = ({navigation}) => {
  const [rememberMe, setRememberMe] = useState(false);

  const renderHeader = () => {
    return <components.Header goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: theme.sizes.height * 0.1,
          paddingBottom: 20,
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            ...theme.fonts.H1,
            color: theme.colors.mainColor,
            lineHeight: 32 * 1.3,
            marginBottom: 14,
            textTransform: 'capitalize',
          }}
        >
          Welcome Back!
        </Text>
        <Text
          style={{
            marginBottom: 40,
            fontSize: 16,
            ...theme.fonts.DMSans_400Regular,
            color: theme.colors.textColor,
          }}
        >
          Sign in to continue
        </Text>
        <components.InputField
          title='Email'
          containerStyle={{marginBottom: 20}}
          placeholder='kristinwatson@mail.com'
          check={true}
        />
        <components.InputField
          title='password'
          containerStyle={{marginBottom: 20}}
          placeholder='kristinwatson@mail.com'
          eyeOffSvg={true}
        />
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 30}}
        >
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <View
              style={{
                width: 18,
                height: 18,
                borderWidth: 1,
                borderColor: '#DBE9F5',
                backgroundColor: '#F8FBFD',
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}
            >
              {rememberMe && (
                <View
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: '#DBE9F5',
                    borderRadius: 3,
                  }}
                />
              )}
            </View>
            <Text
              style={{
                ...theme.fonts.textStyle14,
                color: theme.colors.textColor,
              }}
            >
              Remember me
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginLeft: 'auto'}}
            onPress={() => navigation.navigate(theme.screens.ForgotPassword)}
          >
            <Text
              style={{
                ...theme.fonts.textStyle16,
                color: theme.colors.mainColor,
              }}
            >
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
        <components.Button
          title='Sign in'
          containerStyle={{marginBottom: 20}}
          onPress={() => navigation.navigate(theme.screens.TabNavigator)}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{...theme.fonts.textStyle16, color: theme.colors.textColor}}
          >
            Don’t have an account?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(theme.screens.SignUp)}
          >
            <Text
              style={{
                ...theme.fonts.textStyle16,
                color: theme.colors.mainColor,
              }}
            >
              Sign up.
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
          Sign in with social networks:
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
    <components.CustomSafeArea edges={['left', 'right', 'bottom']}>
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </components.CustomSafeArea>
  );
};

export default SignIn;
