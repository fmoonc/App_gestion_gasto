import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {func} from '../utils';

import {theme} from '../constants';
import {svg} from '../assets';

import ProductCounter from './ProductCounter';

const SinglePriceAndCount = ({item, containerStyle}) => {
  return (
    <View
      style={{
        marginLeft: 20,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderColor: theme.colors.strokeColor,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 12,
        flexDirection: 'row',
        ...containerStyle,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {item.old_price && (
          <Text
            style={{
              ...theme.fonts.DMSans_400Regular,
              marginRight: 4,
              fontSize: 16,
              textDecorationLine: 'line-through',
              color: theme.colors.textColor,
              marginRight: 10,
            }}
          >
            ${item.old_price.toFixed(1)}
          </Text>
        )}
        <Text
          style={{
            ...theme.fonts.DMSans_700Bold,
            fontSize: 20,
            color: theme.colors.mainColor,
          }}
        >
          ${item.price.toFixed(1)}
        </Text>
      </View>
      <ProductCounter item={item} />
    </View>
  );
};

export default SinglePriceAndCount;
