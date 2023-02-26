import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../constants';
import {svg} from '../assets';

import ImageLoader from './ImageLoader';
import Favorite from './Favorite';
import Quantity from './Quantity';
import ProductName from './ProductName';
import Price from './Price';

const ShopItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={{marginBottom: 20}}
      onPress={() => navigation.navigate(theme.screens.ProductShort, {item})}
    >
      <ImageLoader
        source={{uri: item.images[0]}}
        containerStyle={{width: (theme.sizes.width - 40) / 2 - 10, height: 200}}
        childrenStyle={{padding: 10}}
      >
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
            alignItems: 'flex-end',
          }}
        >
          <Favorite item={item} />
          <Quantity item={item} />
        </View>
      </ImageLoader>
      <ProductName item={item} containerStyle={{marginTop: 10}} />
      <Price item={item} />
    </TouchableOpacity>
  );
};

export default ShopItem;
