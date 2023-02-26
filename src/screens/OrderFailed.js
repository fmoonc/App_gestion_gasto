import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets/svg';
import {func} from '../utils';

const OrderFailed = ({navigation}) => {
  const renderContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          justifyContent: 'center',
        }}
      >
        <View style={{marginBottom: 30}}>
          <svg.FailedSvg />
        </View>
        <Text
          style={{
            ...theme.fonts.H2,
            color: theme.colors.mainColor,
            marginBottom: 14,
          }}
        >
          Sorry! Your order{'\n'}has failed!
        </Text>
        <Text
          style={{...theme.fonts.textStyle16, color: theme.colors.textColor}}
        >
          Something went wrong. Please try{'\n'}again to contimue your order.
        </Text>
      </ScrollView>
    );
  };

  const renderFooter = () => {
    return (
      <View style={{paddingHorizontal: 20, marginTop: 20}}>
        <components.Button
          title='try again'
          containerStyle={{marginBottom: 14}}
          onPress={() => {}}
        />
        <components.Button
          title='go to my profile'
          containerStyle={{marginBottom: 40}}
          transparent={true}
          onPress={() => {
            func.setScreen(theme.screens.Profile);
            navigation.navigate(theme.screens.TabNavigator);
          }}
        />
      </View>
    );
  };

  return (
    <components.CustomSafeArea>
      {renderContent()}
      {renderFooter()}
    </components.CustomSafeArea>
  );
};

export default OrderFailed;
