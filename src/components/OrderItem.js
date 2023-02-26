import {View, Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';

import ImageLoader from './ImageLoader';

const OrderItem = (data) => {
  return (
    <View
      style={{
        marginBottom: 14,
        backgroundColor: theme.colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
      }}
    >
      <ImageLoader
        // source={{uri: data.item.images[0]}}
        containerStyle={{
          width: 100,
          height: 100,
        }}
        onPress={() => {}}
      >
        <Text>{data.name}</Text>
        {/* <components.SaleBadge item={item} /> */}
      </ImageLoader>
      <View
        style={{
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: '#DBE9F5',
          flexDirection: 'row',
          flex: 1,
          height: '100%',
          alignItems: 'center',
          paddingLeft: 14,
          paddingRight: 4,
        }}
      >
        <View
          style={{
            marginRight: 'auto',
          }}
        >
          {/* <components.ProductName
            item={data}
            containerStyle={{marginBottom: 3}}
          /> */}
          {/* <components.Price item={item} containerStyle={{marginBottom: 9}} /> */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                marginRight: 8,
                ...theme.fonts.DMSans_400Regular,
                fontSize: 12,
                textTransform: 'capitalize',
                color: theme.colors.textColor,
                lineHeight: 12 * 1.5,
              }}
            >
              color
            </Text>
            {/* <Text>{item.color ? item.color : '-'}</Text> */}
          </View>
        </View>
        {/* <components.OrderCounter item={item} /> */}
      </View>
    </View>
  );
};

export default OrderItem;
