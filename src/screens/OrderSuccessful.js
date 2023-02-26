import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets';

const OrderSuccessful = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/63aabf14dfc68e59d571e16c')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.record);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
          <svg.CheckSvg />
        </View>
        <Text
          style={{
            ...theme.fonts.H2,
            color: theme.colors.mainColor,
            marginBottom: 14,
          }}
        >
          Thank you for{'\n'}your order!
        </Text>
        <Text
          style={{...theme.fonts.textStyle16, color: theme.colors.textColor}}
        >
          Your order will be delivered on time.{'\n'}Thank you!
        </Text>
      </ScrollView>
    );
  };

  const renderFooter = () => {
    return (
      <View style={{paddingHorizontal: 20, marginTop: 20}}>
        <components.Button
          title='View orders'
          containerStyle={{marginBottom: 14}}
          onPress={() => navigation.navigate(theme.screens.OrderHistory)}
        />
        <components.Button
          title='Continue Shopping'
          containerStyle={{marginBottom: 40}}
          transparent={true}
          onPress={() => {
            navigation.navigate(theme.screens.Shop, {items: data});
          }}
        />
      </View>
    );
  };

  return (
    <components.CustomSafeArea edges={['left', 'right', 'bottom', 'top']}>
      {/* {renderStatusBar()} */}
      {/* {renderHeader()} */}
      {renderContent()}
      {renderFooter()}
    </components.CustomSafeArea>
  );
};

export default OrderSuccessful;
