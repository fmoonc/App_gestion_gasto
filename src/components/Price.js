import {View, Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';

const Price = ({item, containerStyle}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...containerStyle,
      }}
    >
      {item.old_price && (
        <Text
          style={{
            ...theme.fonts.DMSans_400Regular,
            marginRight: 4,
            fontSize: 12,
            lineHeight: 12 * 1.5,
            textDecorationLine: 'line-through',
            color: theme.colors.textColor,
          }}
        >
          ${item.old_price.toFixed(1)}
        </Text>
      )}
      <Text
        style={{
          ...theme.fonts.DMSans_500Medium,
          fontSize: 14,
          lineHeight: 14 * 1.5,
          color: theme.colors.mainColor,
        }}
      >
        ${item.price.toFixed(1)}
      </Text>
    </View>
  );
};

export default Price;
