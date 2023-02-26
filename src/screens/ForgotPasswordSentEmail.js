import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets';

const ForgotPasswordSentEmail = ({navigation}) => {
  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{marginBottom: 30}}>
          <svg.KeySvg />
        </View>
        <Text
          style={{
            ...theme.fonts.H2,
            color: theme.colors.mainColor,
            textTransform: 'capitalize',
            marginBottom: 14,
          }}
        >
          Your password has{'\n'}been reset!
        </Text>
        <Text
          style={{...theme.fonts.textStyle16, color: theme.colors.textColor}}
        >
          Qui ex aute ipsum duis. Incididunt adipisicing voluptate laborum
        </Text>
      </ScrollView>
    );
  };

  const renderButton = () => {
    return (
      <View style={{paddingHorizontal: 20, paddingBottom: 40}}>
        <components.Button
          title='done'
          onPress={() => navigation.navigate(theme.screens.SignIn)}
        />
      </View>
    );
  };

  return (
    <components.CustomSafeArea>
      {renderContent()}
      {renderButton()}
    </components.CustomSafeArea>
  );
};

export default ForgotPasswordSentEmail;
