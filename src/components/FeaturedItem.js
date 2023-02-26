import {View, Text, Image} from 'react-native';
import React from 'react';

import {theme} from '../constants';

import Favorite from './Favorite';
import ImageLoader from './ImageLoader';
import SaleBadge from './SaleBadge';
import InCart from './InCart';
import Price from './Price';

const FeaturedItem = ({item}) => {
  return (
    <View style={{marginRight: 14}}>
      <ImageLoader
        source={{uri: item.images[0]}}
        containerStyle={{
          width: 138,
          height: 170,
          marginBottom: 14,
        }}
        borderRadius={5}
      >
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <Favorite
            containerStyle={{padding: 10, alignSelf: 'flex-end'}}
            item={item}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: item.is_sale ? 'space-between' : 'flex-end',
            }}
          >
            <SaleBadge item={item} containerStyle={{margin: 10}} />
            <InCart item={item} containerStyle={{padding: 10}} />
          </View>
        </View>
      </ImageLoader>
      <Text
        style={{
          ...theme.fonts.textStyle14,
          color: theme.colors.textColor,
          textTransform: 'capitalize',
          marginBottom: 3,
        }}
        numberOfLines={1}
      >
        {item.name}
      </Text>
      <Price item={item} />
    </View>
  );
};

export default FeaturedItem;
