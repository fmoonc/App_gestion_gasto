import {View, Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';

const ShopNow = ({containerStyle}) => {
  return (
    <View
      style={{
        height: 28,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'baseline',
        ...containerStyle,
      }}
    >
      <Text
        style={{
          ...theme.fonts.DMSans_700Bold,
          fontSize: 12,
          textTransform: 'uppercase',
          color: theme.colors.mainColor,
        }}
      >
        shop now
      </Text>
    </View>
  );
};

export default ShopNow;
