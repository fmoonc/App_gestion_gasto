import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {func} from '../utils';
import {useDispatch, useSelector} from 'react-redux';

import {svg} from '../assets';
import {theme} from '../constants';

const ProductCounter = ({item}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.list);
  const ifItemInCart = cart.find((el) => el.id === item.id);
  const quantity = ifItemInCart ? ifItemInCart.quantity : 0;

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 'auto',
      }}
    >
      <TouchableOpacity
        style={{padding: 16}}
        onPress={() => func.removeFromCart(item, dispatch)}
      >
        <svg.CounterMinusSvg />
      </TouchableOpacity>
      <View
        style={{
          width: 25,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            ...theme.fonts.DMSans_700Bold,
            fontSize: 14,
            color: theme.colors.textColor,
          }}
        >
          {quantity}
        </Text>
      </View>

      <TouchableOpacity
        style={{padding: 16}}
        onPress={() => func.addToCart(item, dispatch)}
      >
        <svg.CounterPlusSvg />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCounter;
