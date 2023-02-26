import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../constants';

import ImageLoader from './ImageLoader';
import Favorite from './Favorite';
import SaleBadge from './SaleBadge';
import InCart from './InCart';
import Price from './Price';

const BestSellerItem = ({item, navigation}) => {
  return (
    <View style={{marginRight: 14}}>
      <TouchableOpacity
        onPress={() => navigation.navigate(theme.screens.ProductLong, {item})}
      >
        <ImageLoader
          source={{uri: item.images[0]}}
          containerStyle={{
            width: 200,
            height: 250,
            marginBottom: 14,
          }}
          imageStyle={{borderRadius: 5}}
        >
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <Favorite
              containerStyle={{padding: 14, alignSelf: 'flex-end'}}
              item={item}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: item.is_sale ? 'space-between' : 'flex-end',
              }}
            >
              <SaleBadge item={item} containerStyle={{margin: 14}} />
              <InCart item={item} containerStyle={{padding: 14}} />
            </View>
          </View>
        </ImageLoader>
      </TouchableOpacity>
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

export default BestSellerItem;
