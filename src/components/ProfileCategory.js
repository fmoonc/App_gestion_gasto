import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../constants';
import {svg} from '../assets';

const ProfileCategory = ({icon, title, onPress, nextScreen = true}) => {
  return (
    <TouchableOpacity
      style={{
        height: 56,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderColor: '#DBE9F5',
        marginBottom: nextScreen ? 10 : 0,
      }}
      onPress={onPress}
    >
      {title === 'My orders' && <svg.ServerSvg />}
      {title === 'Payment method' && <svg.CreditCardSvg />}
      {title === 'Delivery address' && <svg.MapPinSvg />}
      {title === 'Promocodes & gift cards' && <svg.GiftSvg />}
      {title === 'Sign out' && <svg.LogOutSvg />}
      <Text
        style={{
          ...theme.fonts.textStyle16,
          color: theme.colors.mainColor,
          marginLeft: 10,
        }}
      >
        {title}
      </Text>
      <View style={{marginLeft: 'auto'}}>
        {nextScreen && <svg.NextScreenSvg />}
      </View>
    </TouchableOpacity>
  );
};

export default ProfileCategory;
