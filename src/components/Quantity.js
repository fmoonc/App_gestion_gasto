import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import {theme} from '../constants';

const Quantity = ({item}) => {
  const cart = useSelector((state) => state.cart.list);
  const cartItemExist = cart.find((cartItem) => cartItem.id === item.id);

  return (
    cartItemExist && (
      <View
        style={{
          width: 16,
          height: 16,
          backgroundColor: theme.colors.mainColor,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: theme.colors.white,
            fontSize: 8,
            ...theme.fonts.DMSans_700Bold,
            textTransform: 'uppercase',
          }}
        >
          {cartItemExist.quantity}
        </Text>
      </View>
    )
  );
};

export default Quantity;
