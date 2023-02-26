import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../constants';

import ImageLoader from './ImageLoader';
import SaleBadge from './SaleBadge';
import ProductName from './ProductName';
import Price from './Price';
import Rating from './Rating';
import Favorite from './Favorite';
import InCart from './InCart';

const HorizontalProductItem = ({item, navigation, containerStyle}) => {
  return (
    <View
      style={{
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        ...containerStyle,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(theme.screens.ProductLong, {item});
        }}
      >
        <ImageLoader
          source={{uri: item.images[0]}}
          containerStyle={{width: 100, height: 100}}
          childrenStyle={{
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
          }}
          activityIndicatorStyle={{
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
          }}
          imageStyle={{
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
            resizeMode: 'contain',
          }}
        >
          <SaleBadge item={item} containerStyle={{margin: 10}} />
        </ImageLoader>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderColor: theme.colors.strokeColor,
          height: '100%',
          paddingLeft: 14,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: 20,
        }}
      >
        <View>
          <ProductName item={item} containerStyle={{marginBottom: 3}} />
          <Price item={item} containerStyle={{marginBottom: 11}} />
          <Rating item={item} />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
            paddingVertical: 14,
          }}
        >
          <Favorite item={item} />
          <InCart item={item} />
        </View>
      </View>
    </View>
  );
};

export default HorizontalProductItem;
