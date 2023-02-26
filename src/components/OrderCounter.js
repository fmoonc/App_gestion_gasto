import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {func} from '../utils';
import {useDispatch, useSelector} from 'react-redux';

import {svg} from '../assets';

const OrderCounter = ({item}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.list);
  const quantity = cart.find((el) => el.id === item.id).quantity;

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <TouchableOpacity
        style={{padding: 16}}
        onPress={() => func.addToCart(item, dispatch)}
      >
        <svg.CounterPlusSvg />
      </TouchableOpacity>
      <Text>{quantity}</Text>
      <TouchableOpacity
        style={{padding: 16}}
        onPress={() => func.removeFromCart(item, dispatch)}
      >
        <svg.CounterMinusSvg />
      </TouchableOpacity>
    </View>
  );
};

export default OrderCounter;
