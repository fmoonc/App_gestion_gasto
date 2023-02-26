import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import {svg} from '../assets';
import {theme} from '../constants';

const PaymentItem = ({icon, selected, edit, add, onPress, cardNumber}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 66,
        borderTopWidth: 1,
        paddingRight: 20,
        justifyContent: 'space-between',
        borderTopColor: theme.colors.strokeColor,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {icon}
        {cardNumber && (
          <Text
            style={{
              ...theme.fonts.textStyle14,
              color: theme.colors.textColor,
              marginRight: 10,
            }}
          >
            {cardNumber}
          </Text>
        )}

        {selected && <svg.PaymentSelectedSvg />}
      </View>
      {edit && <svg.PaymentEditSvg />}
      {add && <svg.PaymentPlusSvg />}
    </TouchableOpacity>
  );
};

export default PaymentItem;
