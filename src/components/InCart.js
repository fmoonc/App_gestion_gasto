import React from 'react';
import {TouchableOpacity} from 'react-native';
import {func} from '../utils';
import {useSelector} from 'react-redux';

import {svg} from '../assets';

const InCart = ({item, containerStyle, message = true}) => {
  const cart = useSelector((state) => state.cart.list);

  return (
    <TouchableOpacity
      style={{...containerStyle}}
      onPress={() => {
        func.cartItemExist(item, cart)
          ? func.cartItemExistMessage()
          : func.addToCart(item, func.storeFunc(), message);
      }}
    >
      <svg.PlusSvg />
    </TouchableOpacity>
  );
};

export default InCart;
